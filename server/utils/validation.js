import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().trim().min(2, 'Name is required').max(120),
  city: z.string().trim().min(2, 'City is required').max(120),
  phone: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, 'Enter a valid phone number'),
  problem: z.enum([
    'Premature Ejaculation',
    'Erectile Dysfunction',
    'Low Stamina',
    'Sexual Confidence',
    'Size Concern',
    'General Sexual Wellness',
    'Other'
  ]),
  description: z.string().trim().min(5, 'Please describe the problem').max(1000)
}).strict();

export const loginSchema = z.object({
  email: z.string().trim().email().max(160),
  password: z.string().min(8).max(200)
}).strict();

export const feedbackSchema = z.object({
  name: z.string().trim().min(2, 'Name is required').max(120),
  city: z.string().trim().min(2, 'City is required').max(120),
  rating: z.coerce.number().int().min(1).max(5),
  message: z.string().trim().min(8, 'Feedback is too short').max(600)
}).strict();
