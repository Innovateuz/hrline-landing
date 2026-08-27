interface DonutProps {
  value: number;
  size?: number;
  stroke?: number;
  label?: string;
  sub?: string;
}

export function Donut({
  value,
  size = 120,
  stroke = 12,
  label,
  sub,
}: DonutProps) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;

  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="donutg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#818CF8" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#EEF0FF"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#donutg)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-lg font-bold text-ink">{label ?? `${value}%`}</span>
        {sub && <span className="text-[10px] font-medium text-ink-muted">{sub}</span>}
      </div>
    </div>
  );
}
