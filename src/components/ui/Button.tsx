import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "accent" | "ghost";
};

export function Button({
  variant = "accent",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "min-h-11 w-full cursor-pointer rounded-lg border-0 text-sm font-extrabold transition",
        "disabled:cursor-not-allowed disabled:opacity-50 hover:scale-102 duration-500 ease-in-out",
        variant === "accent" && "bg-accent text-white hover:opacity-90",
        variant === "ghost" &&
          "bg-transparent text-accent underline hover:opacity-80",
        className,
      )}
      {...props}
    />
  );
}
