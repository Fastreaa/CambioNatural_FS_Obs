"use client";

export default function UpcomingEventItem({ children }) {
  return (
    <div
      className="
        grid
        grid-cols-[320px_1fr]
        gap-32
        items-start
      "
    >
      {/* Imagen */}
      <div
        className="
          w-[390px]
          h-[320px]
          bg-transparent
          rounded-3xl
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
          max-w-3xl

          [&>div>span]:block

          /* TÍTULO EVENTO */
          [&>div>span:first-child]:font-dela
          [&>div>span:first-child]:text-3xl
          [&>div>span:first-child]:leading-tight
          [&>div>span:first-child]:mb-4

          /* TEXTO */
          [&>div>span:not(:first-child)]:font-inter
          [&>div>span:not(:first-child)]:text-3xl
          [&>div>span:not(:first-child)]:leading-relaxed
          [&>div>span:not(:first-child)]:opacity-90
          [&>div>span:not(:first-child)]:mb-3

          [&>div>span:last-child]:mb-0
        "
      >
        {children?.[1]}
      </div>
    </div>
  );
}
