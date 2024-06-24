import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export const Button = ({ type, children, className, ...rest }: ButtonProps) => {
	return (
		<button
			type={type}
			className={`bg-gradient-to-br from-orange-700 via-sky-600 to-pink-600 ${className}`}
		>
			{children}
		</button>
	);
};
