"use client";

export default function GatheringsListItem({ children }) {
  return (
    <div
      className="
        grid
        grid-cols-[320px_1fr]
        gap-24
        items-start
      "
    >
      {/* Imagen */}
      <div
        className="
          h-[420px]
          w-[320px]
          bg-transparent
          rounded-2xl
          overflow-hidden

          [&>img]:w-full
          [&>img]:h-full
          [&>img]:object-cover
        "
      >
        {children?.[0]}
      </div>

      {/* Texto */}
      <div
        className="
          text-white
          max-w-2xl

          [&>div>span]:block

          /* TÍTULO / FRASE FUERTE */
          [&>div>span:first-child]:font-dela
          [&>div>span:first-child]:text-3xl
          [&>div>span:first-child]:leading-tight
          [&>div>span:first-child]:mb-4

          /* TEXTO CORRIDO */
          [&>div>span:not(:first-child)]:font-inter
          [&>div>span:not(:first-child)]:text-3xl
          [&>div>span:not(:first-child)]:leading-relaxed
          [&>div>span:not(:first-child)]:mb-3

          [&>div>span:last-child]:mb-0
        "
      >
        {children?.[1]}
      </div>
    </div>
  );
}
