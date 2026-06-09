import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  return NextResponse.json({
    resendConfigured: Boolean(apiKey),
    contactEmailSet: Boolean(process.env.CONTACT_EMAIL?.trim()),
    fromEmailSet: Boolean(process.env.RESEND_FROM_EMAIL?.trim()),
    nodeEnv: process.env.NODE_ENV,
  });
}
