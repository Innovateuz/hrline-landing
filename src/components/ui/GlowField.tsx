interface GlowFieldProps {
  variant?: "light" | "violet" | "hero";
  grid?: boolean;
  className?: string;
}

/** Soft ambient gradient orbs + optional 3D grid. Pure CSS, GPU-cheap. */
export function GlowField({
  variant = "light",
  grid = false,
  className = "",
}: GlowFieldProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {grid && (
        <div className="absolute inset-0 grid-bg opacity-70" />
      )}

      {variant === "hero" && (
        <>
          <div className="absolute -left-[10%] top-[-15%] h-[520px] w-[520px] rounded-full bg-brand-300/40 blur-[120px]" />
          <div className="absolute right-[-10%] top-[10%] h-[460px] w-[460px] rounded-full bg-violet-soft/35 blur-[130px]" />
          <div className="absolute bottom-[-20%] left-[30%] h-[420px] w-[420px] rounded-full bg-brand-200/40 blur-[120px]" />
        </>
      )}

      {variant === "light" && (
        <>
          <div className="absolute left-[-8%] top-[-10%] h-[380px] w-[380px] rounded-full bg-brand-200/30 blur-[120px]" />
          <div className="absolute right-[-6%] bottom-[-12%] h-[340px] w-[340px] rounded-full bg-violet-soft/25 blur-[120px]" />
        </>
      )}

      {variant === "violet" && (
        <>
          <div className="absolute left-[10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-violet/30 blur-[120px]" />
          <div className="absolute right-[-5%] top-[20%] h-[380px] w-[380px] rounded-full bg-brand-500/25 blur-[130px]" />
        </>
      )}
    </div>
  );
}
