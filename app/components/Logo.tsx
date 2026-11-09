type LogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

/**
 * Text-based Kickback wordmark fallback.
 * Ryan will drop the actual SVG/PNG into /public/logo.png and this swaps automatically.
 */
export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: "text-2xl",
    md: "text-4xl md:text-5xl",
    lg: "text-6xl md:text-8xl",
  } as const;

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className={`font-script leading-none ${sizes[size]}`}
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #4dd8f0 45%, #7cc4f5 75%, #1b5fb5 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.9)",
          textShadow: "3px 3px 0 #0b3a78, 6px 6px 0 rgba(11,58,120,0.5)",
        }}
      >
        The Kickback
      </span>
    </div>
  );
}
