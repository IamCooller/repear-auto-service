'use client';
import React, { useState } from 'react';
import { Button } from './button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { sendContactForm } from '@/services/actions';
import { ContactForm } from '@/services/schema';
import { useToast } from '@/hooks/use-toast';
import { Input } from './input';

/**
 * FormBlock component
 *
 * Renders a form with input fields for user to fill and send a message to the
 * admin. The form has the following fields: full name, phone number, vin number,
 * comments and file upload.
 *
 * @returns {JSX.Element} The form block component
 */
const FormBlock = () => {
  const form = useForm<z.infer<typeof ContactForm>>({
    resolver: zodResolver(ContactForm),
    defaultValues: {
      FullName: '',
      phone: '',
      vin: '',
      comments: '',
      files: [null, null, null] // Массив для 3 файлов
    }
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  /**
   * Submits the form data to the server and shows a toast message with the result
   * @param {z.infer<typeof ContactForm>} data The form data
   */
  const onSubmit = async (data: z.infer<typeof ContactForm>) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('FullName', data.FullName);
      formData.append('phone', data.phone);
      formData.append('vin', data.vin || '');
      formData.append('comments', data.comments);

      // Добавляем файлы в formData
      data.files.forEach((file, index) => {
        if (file) {
          formData.append(`file_${index + 1}`, file);
        }
      });

      const res = await sendContactForm(formData);

      if (res.errors) {
        console.error(res.errors);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: res.message
        });
      } else {
        toast({
          variant: 'success',
          title: 'Success',
          description: res.message
        });
        form.reset();
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: (error as Error)?.message || 'Failed to send message'
      });
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const files = Array.from(e.target.files || []);
    const updatedFiles = [...form.getValues('files')];
    updatedFiles[index] = files[0] || null; // Добавляем или удаляем файл
    form.setValue('files', updatedFiles);
  };

  const removeFile = (index: number | undefined) => {
    if (index === undefined) return;
    const updatedFiles = [...form.getValues('files')];
    updatedFiles[index] = null;
    form.setValue('files', updatedFiles);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative mx-auto max-w-[670px]"
      >
        <div className="space-y-[20px]">
          {' '}
          {/* Full Name */}
          <FormField
            control={form.control}
            name="FullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FormLabel className="hidden">Full Name</FormLabel>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Phone Number */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FormLabel className="hidden">Phone Number</FormLabel>
                  <Input
                    {...field}
                    type="tel"
                    autoComplete="tel"
                    placeholder="Phone Number"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* VIN Number */}
          <FormField
            control={form.control}
            name="vin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FormLabel className="hidden">VIN Number</FormLabel>
                  <Input {...field} type="text" placeholder="VIN Number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Comments */}
          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FormLabel className="hidden">Comments</FormLabel>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Comments"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* File Uploads */}
          <div className="grid lg:grid-cols-3 gap-[20px]">
            {[0, 1, 2].map(index => (
              <FormItem key={index}>
                <FormControl>
                  <FormLabel className="hidden">File Upload</FormLabel>
                  <button
                    className={`w-full cursor-pointer flex items-center justify-between px-[24px] py-[29px]  bg-black relative hover:bg-white hover:text-black border-2  font-robotoborder-transparent hover:border-black active:scale-95  transition-all duration-300 ease-in-out ${
                      form.watch('files')[index] ? 'text-red' : 'text-white'
                    }`}
                    onClick={() =>
                      removeFile(form.watch('files')[index] ? index : undefined)
                    }
                    type="button"
                  >
                    {form.watch('files')[index] ? (
                      <>
                        {' '}
                        File Attached
                        <div>✕</div>
                      </>
                    ) : (
                      <>
                        Attach File
                        <Input
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={e => handleFileChange(e, index)}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer pointer-events-auto"
                        />
                      </>
                    )}
                  </button>
                </FormControl>
                <FormMessage />
              </FormItem>
            ))}
          </div>
        </div>
        {/* Submit Button */}
        <div className="w-full mt-[32px] relative">
          <Button
            type="submit"
            disabled={loading}
            aria-disabled={loading}
            className="w-full"
          >
            Send
          </Button>
          {loading && (
            <div className="absolute inset-0  z-10 bg-black/50 flex items-center justify-center">
              <div className="spinner"></div>
            </div>
          )}
        </div>
      </form>
    </Form>
  );
};

export default FormBlock;
