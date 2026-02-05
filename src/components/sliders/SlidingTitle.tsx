"use client";

export default function SlidingTitle({ titles }: { titles: string[] }) {
  titles = [...titles, ...titles];

  return (
    <div className="relative overflow-hidden py-8 md:border-b max-md:border-y border-secondary max_screen_width">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {titles.map((t, i) => (
            <span key={i} className="marquee-item text-secondary font-semibold md:text-[7.5rem] text-5xl">
              <span>{t}</span>
              <span className="separator">—</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
