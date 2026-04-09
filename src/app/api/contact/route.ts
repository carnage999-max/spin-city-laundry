import { Resend } from 'resend';

export const runtime = 'nodejs';

type ContactPayload = {
  name?: string;
  contact?: string;
  subject?: string;
  message?: string;
};

type SanitizedContactPayload = {
  name: string;
  contact: string;
  subject: string;
  message: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function getRecipients() {
  return (process.env.CONTACT_RECIPIENTS ?? '')
    .split(',')
    .map((email) => email.trim())
    .filter((email) => email.length > 0);
}

function getReplyTo(contact: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(contact) ? contact : undefined;
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatMessageHtml(message: string) {
  return escapeHtml(message).replaceAll('\n', '<br />');
}

function buildHtmlEmail({ name, contact, subject, message }: SanitizedContactPayload) {
  const safeName = escapeHtml(name);
  const safeContact = escapeHtml(contact);
  const safeSubject = escapeHtml(subject);
  const safeMessage = formatMessageHtml(message);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Spin City Laundry Contact Form</title>
  </head>
  <body style="margin:0;padding:24px;background:#edf2ff;font-family:Arial,sans-serif;color:#0d0d0d;">
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="border-collapse:collapse;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="max-width:720px;border-collapse:collapse;">
            <tr>
              <td style="padding:0 0 20px;">
                <div style="display:inline-block;padding:6px 14px;border:2px solid #0d0d0d;background:#f5c200;font-weight:700;font-size:12px;letter-spacing:1.8px;text-transform:uppercase;">
                  New Website Enquiry
                </div>
              </td>
            </tr>
            <tr>
              <td style="background:#0a1628;padding:24px;border:3px solid #0d0d0d;">
                <h1 style="margin:0;font-size:36px;line-height:1.1;color:#ffffff;font-family:Impact,Haettenschweiler,'Arial Narrow Bold',sans-serif;letter-spacing:1px;text-transform:uppercase;">
                  Spin City Laundry
                </h1>
                <p style="margin:12px 0 0;font-size:16px;line-height:1.6;color:#dfe7ff;">
                  A new contact form message has been submitted from the website.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding-top:18px;">
                <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="border-collapse:collapse;background:#ffffff;border:3px solid #0d0d0d;box-shadow:5px 5px 0 #0d0d0d;">
                  <tr>
                    <td style="padding:22px 24px;border-bottom:2px solid #0d0d0d;background:#f5c200;">
                      <div style="font-size:26px;line-height:1.1;font-weight:700;font-family:Impact,Haettenschweiler,'Arial Narrow Bold',sans-serif;letter-spacing:1px;text-transform:uppercase;">
                        Contact Details
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:24px;">
                      <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="border-collapse:collapse;">
                        <tr>
                          <td style="padding:0 0 16px;vertical-align:top;">
                            <div style="font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#1a6fe8;">Name</div>
                            <div style="margin-top:6px;font-size:18px;line-height:1.5;color:#0d0d0d;">${safeName}</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:0 0 16px;vertical-align:top;">
                            <div style="font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#1a6fe8;">Contact</div>
                            <div style="margin-top:6px;font-size:18px;line-height:1.5;color:#0d0d0d;">${safeContact}</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:0 0 16px;vertical-align:top;">
                            <div style="font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#1a6fe8;">Subject</div>
                            <div style="margin-top:6px;font-size:18px;line-height:1.5;color:#0d0d0d;">${safeSubject}</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="vertical-align:top;">
                            <div style="font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#1a6fe8;">Message</div>
                            <div style="margin-top:10px;padding:18px;background:#edf2ff;border:2px solid #0d0d0d;font-size:16px;line-height:1.7;color:#0d0d0d;">
                              ${safeMessage}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding-top:18px;">
                <p style="margin:0;font-size:13px;line-height:1.6;color:#45516a;">
                  This email was generated automatically from the Spin City Laundry website contact form.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: 'Missing RESEND_API_KEY. Add it to your environment before sending mail.' },
      { status: 500 }
    );
  }

  if (!isNonEmptyString(process.env.CONTACT_FROM_EMAIL)) {
    return Response.json(
      {
        error:
          'Missing CONTACT_FROM_EMAIL. Add a verified sender address to your environment.',
      },
      { status: 500 }
    );
  }

  const recipients = getRecipients();

  if (recipients.length === 0) {
    return Response.json(
      {
        error:
          'Missing CONTACT_RECIPIENTS. Add one or more comma-separated recipient emails to your environment.',
      },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, contact, subject, message } = payload;

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(contact) ||
    !isNonEmptyString(subject) ||
    !isNonEmptyString(message)
  ) {
    return Response.json(
      { error: 'Name, contact, subject, and message are all required.' },
      { status: 400 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const sanitizedPayload = {
      name: name.trim(),
      contact: contact.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };
    const replyTo = getReplyTo(sanitizedPayload.contact);

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: recipients,
      subject: `Spin City Laundry Contact: ${sanitizedPayload.subject}`,
      replyTo,
      html: buildHtmlEmail(sanitizedPayload),
      text: [
        'New contact form submission from Spin City Laundry',
        '',
        `Name: ${sanitizedPayload.name}`,
        `Contact: ${sanitizedPayload.contact}`,
        `Subject: ${sanitizedPayload.subject}`,
        '',
        'Message:',
        sanitizedPayload.message,
      ].join('\n'),
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: 'We could not send your message right now. Please try again shortly.' },
      { status: 500 }
    );
  }
}
