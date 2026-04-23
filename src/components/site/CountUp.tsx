import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

type CountUpProps = {
  /** Numeric value to animate to. */
  to: number;
  /** Optional prefix (e.g. "+€"). */
  prefix?: string;
  /** Optional suffix (e.g. "+", "M"). */
  suffix?: string;
  /** Duration in ms. */
  duration?: number;
  /** Pad the integer part with leading zeros (e.g. "04"). */
  pad?: number;
  /** Use Italian thousand separator. */
  thousands?: boolean;
  className?: string;
};

/**
 * Counts up to a numeric value when the element enters the viewport.
 * Editorial easing (ease-out cubic) keeps it subtle, not arcadey.
 */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1600,
  pad,
  thousands = false,
  className,
}: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const formatted = (() => {
    let s = String(value);
    if (pad) s = s.padStart(pad, "0");
    if (thousands) s = Number(s).toLocaleString("it-IT");
    return s;
  })();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}