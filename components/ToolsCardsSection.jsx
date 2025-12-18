"use client";

export default function ToolsCardsSection({ children }) {
  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div
          className="
            grid grid-cols-1 md:grid-cols-3
            gap-16

            /* CARD */
            [&>div]:flex
            [&>div]:flex-col
            [&>div]:items-start
            [&>div]:gap-6

            /* IMAGEN */
            [&>div>img]:w-full
            [&>div>img]:h-[320px]
            [&>div>img]:object-cover
            [&>div>img]:rounded-3xl

            /* TITULO (opcional) */
            [&>div>span:first-of-type]:font-dela
            [&>div>span:first-of-type]:text-xl
            [&>div>span:first-of-type]:leading-tight

            /* TEXTO */
            [&>div>span:not(:first-of-type)]:font-inter
            [&>div>span:not(:first-of-type)]:text-base
            [&>div>span:not(:first-of-type)]:leading-relaxed
          "
        >
          {children}
        </div>

      </div>
    </section>
  );
}
