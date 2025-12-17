"use client";

export default function SingleSectorSection({ children }) {
  return (
    <section className="w-full bg-[#0A6CFF] py-40">
      <div
        className="
          max-w-7xl
          mx-auto
          px-12
          grid
          grid-cols-1
          md:grid-cols-2
          gap-32
        "
      >
        {/* Columnas */}
        <div
          className="
            text-white

            [&>div>span]:block
            [&>div>span]:font-inter
            [&>div>span]:text-4xl
            [&>div>span]:leading-relaxed

            /* Título */
            [&>div>span:first-child]:font-dela
            [&>div>span:first-child]:uppercase
            [&>div>span:first-child]:text-4xl
            [&>div>span:first-child]:leading-tight
            [&>div>span:first-child]:mb-6
          "
        >
          {children?.[0]}
        </div>

        <div
          className="
            text-white

            [&>div>span]:block
            [&>div>span]:font-inter
            [&>div>span]:text-4xl
            [&>div>span]:leading-relaxed

            [&>div>span:first-child]:font-dela
            [&>div>span:first-child]:uppercase
            [&>div>span:first-child]:text-4xl
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
