import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/email";

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
    const result = await sendContactEmail(data);

    return NextResponse.json({
      success: true,
      emailed: result.emailed,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    const message =
      error instanceof Error
        ? error.message
        : "Failed to process your message. Please try again.";

    console.error("[Contact API Error]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
