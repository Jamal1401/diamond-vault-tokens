import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AssetOwnerInquiryRequest {
  name: string;
  organisation: string;
  role: string;
  email: string;
  inventoryValue: string;
  description: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: AssetOwnerInquiryRequest = await req.json();
    console.log("Received asset owner inquiry:", { 
      name: data.name, 
      email: data.email 
    });

    // Step 1: Save to database
    const { data: insertedRecord, error: dbError } = await supabase
      .from("asset_owner_inquiries")
      .insert({
        name: data.name,
        organisation: data.organisation,
        role: data.role,
        email: data.email,
        inventory_value: data.inventoryValue,
        description: data.description,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database insert error:", dbError);
      throw new Error(`Failed to save inquiry: ${dbError.message}`);
    }

    console.log("Inquiry saved to database with ID:", insertedRecord.id);

    // Step 2: Send email notification
    let emailSent = false;
    try {
      const emailResponse = await resend.emails.send({
        from: "Billiton Asset Owner Inquiries <onboarding@resend.dev>",
        to: ["jamal.akhtar@billitondiamondauctions.com"],
        subject: `New Asset Assessment Request from ${data.name}`,
        html: `
          <h1>New Asset Assessment Request</h1>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Organisation:</strong> ${data.organisation}</p>
          <p><strong>Role:</strong> ${data.role}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Approximate Inventory Value:</strong> ${data.inventoryValue || "Not specified"}</p>
          <p><strong>Holdings Description:</strong></p>
          <p>${data.description || "Not provided"}</p>
        `,
      });

      console.log("Email sent successfully:", emailResponse);
      emailSent = true;
    } catch (emailError: any) {
      console.error("Email sending failed:", emailError);
    }

    // Step 3: Update email status
    if (emailSent) {
      const { error: updateError } = await supabase
        .from("asset_owner_inquiries")
        .update({ email_sent: true })
        .eq("id", insertedRecord.id);

      if (updateError) {
        console.error("Failed to update email_sent status:", updateError);
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        id: insertedRecord.id,
        emailSent 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in asset owner inquiry handler:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
