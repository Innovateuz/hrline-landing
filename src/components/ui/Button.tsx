import { forwardRef } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "ghost" | "light" | "outline-light";
type Size = "md" | "lg";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "a";
  href?: string;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-60 will-change-transform";

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-[15px]",
  lg: "px-7 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "btn-gradient text-white shadow-glow hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-15px_rgba(99,102,241,0.55)]",
  ghost:
    "bg-white text-ink border border-mist-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-float",
  light:
    "bg-white text-brand-700 shadow-float hover:-translate-y-0.5",
  "outline-light":
    "border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/12 hover:-translate-y-0.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as = "button",
      href,
      variant = "primary",
      size = "md",
      withArrow = false,
      className = "",
      children,
      ...rest
    },
    ref
  ) => {
    const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
    const inner = (
      <>
        <span className="relative z-10">{children}</span>
        {withArrow && (
          <Icon
            name="arrow"
            className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </>
    );

    if (as === "a") {
      return (
        <a href={href} className={cls} {...(rest as object)}>
          {inner}
        </a>
      );
    }
    return (
      <button ref={ref} className={cls} {...rest}>
        {inner}
      </button>
    );
  }
);
Button.displayName = "Button";
