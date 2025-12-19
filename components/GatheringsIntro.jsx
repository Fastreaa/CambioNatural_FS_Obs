"use client";

export default function GatheringsIntro({ children }) {
  return (
    <section className="w-full bg-[#0A6CFF] py-40">
      <div
        className="
          max-w-7xl
          mx-auto
          px-12
          grid
          grid-cols-1
          md:grid-cols-[420px_1fr]
          gap-32
          items-start
        "
      >
        {/* Visual */}
        <div
          className="
            [&>img]:w-full
            [&>img]:h-full
            [&>img]:object-cover
            [&>img]:rounded-[32px]
            h-[620px]
            bg-transparent
            overflow-hidden
          "
        >
          {children?.[0]}
        </div>

        {/* Texto */}
        <div
          className="
            text-white

            [&>div>span]:block
            [&>div>span]:font-inter
            [&>div>span]:text-3xl
            [&>div>span]:leading-relaxed

            [&>div>span:first-child]:font-dela
            [&>div>span:first-child]:text-3xl
            [&>div>span:first-child]:leading-tight
            [&>div>span:first-child]:mb-6
          "
        >
          {children?.[1]}
        </div>
      </div>
    </section>
  );
}
