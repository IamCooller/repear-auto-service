import { z } from 'zod';
export const ContactForm = z.object({
  FullName: z.string().min(1, 'Full name is required'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  vin: z.string().optional(),
  comments: z.string().min(1, 'Please leave a comment'),
  files: z
    .array(z.union([z.instanceof(File), z.null()]))
    .max(3, 'You can upload up to 3 files')
});
