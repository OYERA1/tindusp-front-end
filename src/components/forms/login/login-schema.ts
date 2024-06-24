import { z } from "zod";

const emailDomainRegex = /^[^\s@]+@[^\s@]+\.(?:usp\.br)$/;

export const loginSchema = z.object({
	email: z
		.string()
		.email()
		.refine((email) => emailDomainRegex.test(email)),
	password: z.string(),
});
