type SparkleProps = {
  size?: number;
  className?: string;
};

/** Cartoon 4-point sparkle, matching the logo's accents. */
export default function Sparkle({ size = 16, className = "" }: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 0 L13.6 9.5 L24 12 L13.6 14.5 L12 24 L10.4 14.5 L0 12 L10.4 9.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}
