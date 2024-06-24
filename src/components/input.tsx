import { forwardRef, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string | null;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ type = "text", name, children, error, className, ...rest }, ref) => {
		return (
			<div className="flex flex-col gap-2">
				<label htmlFor={name}>{children}</label>
				<input
					className={`border-2 border-orange-500 rounded-md px-2 py-1
                focus:outline-none
            ${className}`}
					type={type}
					name={name}
					ref={ref}
					id={name}
					{...rest}
				/>
				{error && <p className="text-red-700">{error}</p>}
			</div>
		);
	},
);
