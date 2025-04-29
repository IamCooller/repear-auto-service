'use server';

import { getEmailTemplate } from './emailTemplate';
import { sendEmail } from '@/lib/email';
import { ContactForm } from './schema';

/**
 * Отправляет форму обратной связи на email администратора.
 *
 * @param {FormData} formData - данные формы, полученные из запроса.
 *
 * @returns {Promise<{errors: null | { [key: string]: string }, message: string}>}
 */
export async function sendContactForm(formData: FormData) {
  const validatedFields = ContactForm.safeParse({
    FullName: formData.get('FullName'),
    phone: formData.get('phone'),
    vin: formData.get('vin'),
    comments: formData.get('comments'),
    files: [
      formData.get('file_1'),
      formData.get('file_2'),
      formData.get('file_3')
    ]
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Send Message.'
    };
  }

  const { FullName, phone, vin, comments, files } = validatedFields.data;
  const filesf = files.filter(file => file !== null) as File[];
  const htmlMessage = getEmailTemplate({
    FullName,
    phone,
    vin,
    email: process.env.EMAIL_TO || '',
    comments,
    title: 'Contact Form Submission'
  });

  try {
    // Буферизация файлов
    const buffers = await Promise.all(
      filesf.map(async file => {
        const arrayBuffer = await file.arrayBuffer();
        return Buffer.from(new Uint8Array(arrayBuffer));
      })
    );

    const attachments =
      filesf.length > 0
        ? filesf.map((file, index) => ({
            filename: file.name,
            content: buffers[index],
            contentType: file.type
          }))
        : [];

    // Отправка email
    await sendEmail({
      to: process.env.EMAIL_TO || '',
      subject: `[Contact Form]: Message from ${FullName}`,
      html: htmlMessage,
      attachments
    });

    return {
      errors: null,
      message: 'Message sent successfully.'
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      errors: error,
      message: 'Failed to send message.'
    };
  }
}
