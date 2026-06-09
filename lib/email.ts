function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export interface ContactEmailData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_EMAIL?.trim() || "hello@elevate444.com";
  const fromEmail =
    process.env.RESEND_FROM_EMAIL?.trim() || "onboarding@resend.dev";
  const fromName = process.env.RESEND_FROM_NAME?.trim() || "Elevate444 Consulting";

  if (!apiKey) {
    const isProduction = process.env.NODE_ENV === "production";
    if (isProduction) {
      throw new Error(
        "Email service is not configured. Add RESEND_API_KEY in Vercel environment variables."
      );
    }

    console.log("[Contact Form — dev mode, no email sent]", {
      to,
      ...data,
      timestamp: new Date().toISOString(),
    });
    return { emailed: false, to };
  }

  const safe = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    company: escapeHtml(data.company || "N/A"),
    service: escapeHtml(data.service),
    message: escapeHtml(data.message).replace(/\n/g, "<br>"),
  };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${fromName} <${fromEmail}>`,
      to: [to],
      reply_to: data.email,
      subject: `New inquiry from ${data.name} — ${data.service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #0F1729;">
          <h2 style="color: #1B4332; border-bottom: 2px solid #C9A227; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold;">Name</td><td>${safe.name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Company</td><td>${safe.company}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Service</td><td>${safe.service}</td></tr>
          </table>
          <h3 style="color: #1B4332; margin-top: 24px;">Message</h3>
          <p style="line-height: 1.6;">${safe.message}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin-top: 32px;" />
          <p style="font-size: 12px; color: #888;">Sent from Elevate444 Consulting contact form</p>
        </div>
      `,
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    console.error("[Resend API Error]", res.status, errorBody);
    let detail = "Failed to send email";
    try {
      const parsed = JSON.parse(errorBody);
      detail = parsed.message || parsed.error || detail;
    } catch {
      detail = errorBody || detail;
    }
    throw new Error(detail);
  }

  const result = await res.json();
  console.log("[Email sent via Resend]", { id: result.id, to });
  return { emailed: true, to, id: result.id };
}
