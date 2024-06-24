"use client";
import { useForm } from "react-hook-form";
import { registerSchema, type registerSchemaType } from "./register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input";
import { Schools } from "@/utils/data";
import { Button } from "@/components/button";

export const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<registerSchemaType>({
		resolver: zodResolver(registerSchema),
	});

	const submitForm = (data: registerSchemaType) => {
		console.log(data);
	};

	const schoolsArray = Object.keys(Schools)
		.filter((key) => Number.isNaN(Number(key)))
		.map((key) => ({
			name: key,
			value: Schools[key as keyof typeof Schools],
		}));

	return (
		<form className="flex flex-col gap-4" onSubmit={handleSubmit((e) => console.log(e))}>
			<Input
				{...register("name")}
				error={errors.name?.message}
				placeholder="Nome"
			/>
			<Input
				{...register("email")}
				error={errors.email?.message}
				placeholder="Email"
			/>
			<Input
				{...register("password")}
				type="password"
				placeholder="Senha"
				error={errors.password?.message}
			/>
			<Input
				{...register("confirmPassword")}
				type="password"
				placeholder="Confirme sua senha"
				error={errors.confirmPassword?.message}
			/>
			<select {...register("school", { valueAsNumber: true })}>
				{schoolsArray.map((item) => (
					<option key={item.value} value={item.value}>
						{item.name}
					</option>
				))}
			</select>
			{errors.school?.message && (
				<p className="text-red-500">{errors.school.message}</p>
			)}
			<button type="submit">Submit</button>
		</form>
	);
};
