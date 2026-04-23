import { ReactNode, ElementType, CSSProperties } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Delay in ms before the reveal animation starts. */
  delay?: number;
  /** Visual variant of the reveal. */
  variant?: "fade-up" | "hairline" | "fade";
  style?: CSSProperties;
};

/**
 * Wraps children with a viewport-triggered fade-up (or hairline draw) reveal.
 * Used to give the editorial layout a quiet, cinematic rhythm on scroll.
 */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  variant = "fade-up",
  style,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  const base =
    variant === "hairline"
      ? "transition-[clip-path,opacity] duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
      : "transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]";

  const hidden =
    variant === "fade-up"
      ? "opacity-0 translate-y-4"
      : variant === "hairline"
      ? "opacity-0 [clip-path:inset(0_100%_0_0)]"
      : "opacity-0";

  const shown =
    variant === "fade-up"
      ? "opacity-100 translate-y-0"
      : variant === "hairline"
      ? "opacity-100 [clip-path:inset(0_0%_0_0)]"
      : "opacity-100";

  return (
    <Tag
      ref={ref}
      className={cn(base, inView ? shown : hidden, className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}