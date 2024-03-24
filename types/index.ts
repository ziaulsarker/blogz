import { z } from 'zod';

export const newsLetterFormValidationType = z.object({
  email: z.string({required_error: "email is required"}).email({ message: "Invalid email address", }).min(4),
})
