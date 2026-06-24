type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-zinc-950 text-white hover:bg-zinc-800",
  secondary: "border border-zinc-300 text-zinc-950 hover:bg-zinc-50",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center px-5 py-3 text-sm font-medium transition ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
}
