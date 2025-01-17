import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  // profilePicture: z.string().url("Invalid URL for profile picture"),
  description: z.string().optional(),
});
