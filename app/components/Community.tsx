"use client";

import { useState } from "react";

export default function Community() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    // Stub. Wire to ConvertKit / Mailchimp / Beehiiv later.
    setSubmitted(true);
  }

  return (
    <section className="relative py-24 md:py-32 bg-ink-soft border-y border-white/10">
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10">
        {/* Newsletter */}
        <div className="rounded-3xl border border-white/10 bg-ink/60 backdrop-blur-sm p-8 md:p-10">
          <p className="eyebrow mb-3">The Newsletter</p>
          <h3 className="font-display text-4xl md:text-5xl uppercase leading-[0.95]">
            Get on the <span className="text-ice">list.</span>
          </h3>
          <p className="mt-4 text-frost/75 leading-relaxed">
            Tour drops, ticket presales, creator opportunities, and behind-the-scenes
            straight to your inbox.
          </p>

          {submitted ? (
            <div className="mt-6 p-4 rounded-2xl border border-ice/40 bg-royal-deep/30">
              <p className="font-display text-2xl uppercase text-ice">You're in. ✦</p>
              <p className="text-sm text-frost/70 mt-1">
                We'll see you at the next stop.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full bg-ink border border-white/15 focus:border-ice focus:outline-none placeholder:text-frost/40 text-frost"
              />
              <button
                type="submit"
                className="btn-primary px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Discord */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-royal-deep/40 to-ink p-8 md:p-10">
          <div className="relative">
            <p className="eyebrow mb-3">The Community</p>
            <h3 className="font-display text-4xl md:text-5xl uppercase leading-[0.95]">
              Join 10K+ in the <span className="text-ice">Discord.</span>
            </h3>
            <p className="mt-4 text-frost/75 leading-relaxed">
              Where the community actually hangs out. Gaming nights, creator
              opportunities, ticket drops, and the conversations that don't make it
              to the timeline.
            </p>
            <a
              href="https://discord.gg/KJ2TpxfTsz"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 btn-ghost inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide"
            >
              Open Discord ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
