export default function CarouselProgress({
  current,           // 0-based selected index
  total,             // total slides
  perView = 1,       // slides visible at once
  className = "",    // outer wrapper classes
  barClassName = "", // inner bar classes
  durationMs = 700,  // transition duration
}: {
  current: number;
  total: number;
  perView?: number;
  className?: string;
  barClassName?: string;
  durationMs?: number;
}) {
  const widthPct = Math.min(100, ((current + perView) * 100) / Math.max(1, total));
  return (
    <div
      className={`w-[31.2rem] mx-auto h-[3px] bg-[#E4E5E5] relative overflow-hidden rounded-full ${className}`}
    >
      <div
        className={`absolute left-0 top-0 h-full bg-blue-600 rounded-full ${barClassName}`}
        style={{ width: `${widthPct}%`, transition: `width ${durationMs}ms` }}
      />
    </div>
  );
}
