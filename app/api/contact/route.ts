import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const contactEmail = process.env.CONTACT_EMAIL || "hello@elevate444.com";

    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
          to: contactEmail,
          subject: `New inquiry from ${data.name} — ${data.service}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company || "N/A"}</p>
            <p><strong>Service:</strong> ${data.service}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
          `,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send email via Resend");
      }
    } else {
      console.log("[Contact Form Submission]", {
        to: contactEmail,
        ...data,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "Failed to process your message. Please try again." },
      { status: 500 }
    );
  }
}
