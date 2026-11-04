/**
 * Reusable background video + dark overlay for hero sections.
 * Drop into any `<section className="relative ...">` and content underneath
 * (with `relative z-10`) will sit on top.
 */
export default function HeroVideo() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 z-0"
      />
    </>
  );
}
