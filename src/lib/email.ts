import { Resend } from 'resend';

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  attachments?: {
    filename: string;
    content: Buffer | string;
    contentType?: string;
  }[];
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: EmailPayload) => {
  const { to, subject, html, attachments } = data;

  const resendAttachments = attachments?.map((att) => ({
    filename: att.filename,
    content: att.content instanceof Buffer ? att.content : Buffer.from(att.content),
  }));

  const result = await resend.emails.send({
    from: process.env.EMAIL_FROM || 'noreply@johnsautobodyinc.com',
    to: to,
    cc: process.env.EMAIL_CC,
    bcc: process.env.EMAIL_BCC,
    subject: subject,
    html: html,
    attachments: resendAttachments,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result;
};
