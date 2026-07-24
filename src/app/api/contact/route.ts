import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();

    const { name, phone, email, area, service, description, referral } = body;

        // Forward to Zapier webhook for lead tracking
        try {
                await fetch('https://hooks.zapier.com/hooks/catch/20117350/44fmixd/', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                                      ...body,
                                      website: 'Premier Concrete of Frisco',
                                      submittedAt: new Date().toISOString(),
                          }),
                });
        } catch (zapierError) {
                console.error('[Zapier Webhook Error]', zapierError);
        }

    const { error } = await resend.emails.send({
      from: "Premier Concrete Of Frisco <onboarding@resend.dev>",
      to: "tightiesllc@gmail.com",
      replyTo: email,
      subject: `New Quote Request: ${service} in ${area}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2E2E2E;">
          <div style="background-color: #2E2E2E; padding: 24px; text-align: center;">
            <h1 style="color: #A88C5A; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: #ffffff; margin: 8px 0 0; font-size: 14px;">Premier Concrete Of Frisco</p>
          </div>
          <div style="padding: 32px 24px; background-color: #FCFBFA;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; font-weight: bold; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; font-weight: bold; vertical-align: top;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB;">
                  <a href="tel:${phone}" style="color: #A88C5A;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; font-weight: bold; vertical-align: top;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB;">
                  <a href="mailto:${email}" style="color: #A88C5A;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; font-weight: bold; vertical-align: top;">Service Area</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB;">${area}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; font-weight: bold; vertical-align: top;">Service Needed</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; font-weight: bold; vertical-align: top;">Project Description</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; white-space: pre-wrap;">${description}</td>
              </tr>
              ${referral ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; font-weight: bold; vertical-align: top;">Referral Source</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB;">${referral}</td>
              </tr>
              ` : ""}
            </table>
          </div>
          <div style="background-color: #2E2E2E; padding: 16px 24px; text-align: center;">
            <p style="color: #6B6B6B; font-size: 12px; margin: 0;">
              Submitted via premierconcreteofrisco.com contact form
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ success: false, error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
