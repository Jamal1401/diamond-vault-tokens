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

interface InvestorInquiryRequest {
  email: string;
  investorTypes: string[];
  ticketSize: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: InvestorInquiryRequest = await req.json();
    console.log("Received investor inquiry:", { email: data.email });

    // Step 1: Save to database
    const { data: insertedRecord, error: dbError } = await supabase
      .from("investor_inquiries")
      .insert({
        email: data.email,
        investor_types: data.investorTypes,
        ticket_size: data.ticketSize,
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
        from: "Billiton Investor Inquiries <onboarding@resend.dev>",
        to: ["jamal.akhtar@billitondiamondauctions.com"],
        subject: `New Investor Interest Registration`,
        html: `
          <h1>New Investor Interest Registration</h1>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Investor Type(s):</strong> ${data.investorTypes.join(", ") || "Not specified"}</p>
          <p><strong>Expected Ticket Size:</strong> ${data.ticketSize || "Not specified"}</p>
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
        .from("investor_inquiries")
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
    console.error("Error in investor inquiry handler:", error);
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
