import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Create Supabase client with service role for database access
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ConsultationRequest {
  firstName: string;
  lastName: string;
  email: string;
  describesYou: string;
  interestedIn: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ConsultationRequest = await req.json();
    console.log("Received consultation request:", { 
      firstName: data.firstName, 
      lastName: data.lastName, 
      email: data.email 
    });

    // Step 1: Save to database first
    const { data: insertedRecord, error: dbError } = await supabase
      .from("consultation_inquiries")
      .insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        describes_you: data.describesYou,
        interested_in: data.interestedIn,
        message: data.message,
        email_sent: false,
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
        from: "Billiton Consultations <onboarding@resend.dev>",
        to: ["jamal.akhtar@billitondiamondauctions.com"],
        subject: `New Consultation Request from ${data.firstName} ${data.lastName}`,
        html: `
          <h1>New Consultation Request</h1>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Describes them:</strong> ${data.describesYou}</p>
          <p><strong>Interested in:</strong> ${data.interestedIn}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      });

      console.log("Email sent successfully:", emailResponse);
      emailSent = true;
    } catch (emailError: any) {
      console.error("Email sending failed:", emailError);
      // Don't throw - inquiry is saved, email just failed
    }

    // Step 3: Update database with email status
    if (emailSent) {
      const { error: updateError } = await supabase
        .from("consultation_inquiries")
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
    console.error("Error in consultation handler:", error);
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
