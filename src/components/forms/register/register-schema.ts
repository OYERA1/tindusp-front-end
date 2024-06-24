import { Schools } from "@/utils/data";
import { z } from "zod";

const emailDomainRegex = /^[^\s@]+@usp\.br$/;
const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-zd!@#$%^&*(),.?":{}|<>]{8,}$/;

export const registerSchema = z
	.object({
		name: z
			.string()
			.trim()
			.refine((name) => name.toLowerCase()),
		email: z
			.string()
			.email()
			.refine((email) => emailDomainRegex.test(email), {
				message: "Apenas emails usp podem ser cadastrados.",
			}),
		password: z.string().min(8),
		confirmPassword: z.string(),
		school: z.nativeEnum(Schools),
	})
	.refine(({ password, confirmPassword }) => password !== confirmPassword, {
		message: "As senhas não coincidem",
	});

export type registerSchemaType = z.infer<typeof registerSchema>;
