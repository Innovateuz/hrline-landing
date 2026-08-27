const GRADIENTS = [
  "from-brand-400 to-violet-deep",
  "from-violet-soft to-brand-600",
  "from-brand-300 to-brand-600",
  "from-indigo-400 to-violet-500",
  "from-violet-400 to-brand-500",
];

interface AvatarProps {
  name: string;
  size?: number;
  className?: string;
  ring?: boolean;
}

export function Avatar({ name, size = 32, className = "", ring = true }: AvatarProps) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const g = GRADIENTS[name.length % GRADIENTS.length];

  return (
    <span
      className={`inline-grid shrink-0 place-items-center rounded-full bg-gradient-to-br ${g} font-semibold text-white ${
        ring ? "ring-2 ring-white" : ""
      } ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </span>
  );
}
