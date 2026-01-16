import { z } from 'zod';

export const contactFormSchema = z.object({
  firstname: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const aiReadinessSchema = z.object({
  firstname: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  industry: z.string().min(2, 'Industry is required'),
  team_size: z.string().min(1, 'Team size is required'),
  current_tools: z.string().optional(),
  biggest_challenge: z.string().min(10, 'Please describe your challenge'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type AIReadinessFormData = z.infer<typeof aiReadinessSchema>;
