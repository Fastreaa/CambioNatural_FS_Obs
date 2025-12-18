"use client";

export default function MediaClubQuoteSection({ children }) {
  return (
    <section
      className="
        w-full
        min-h-[30vh]
        bg-[#1FB64F]
        flex
        items-center
        justify-center
        px-8
      "
    >
      <div
        className="
          max-w-4xl
          text-center
          text-black

          [&>div>span]:block

          /* LÍNEA SUPERIOR */
          [&>div>span:first-child]:font-inter
          [&>div>span:first-child]:text-3xl
          [&>div>span:first-child]:leading-relaxed
          [&>div>span:first-child]:mb-4

          /* LÍNEA ENFASIS */
          [&>div>span:nth-child(2)]:font-dela
          [&>div>span:nth-child(2)]:text-3xl
          [&>div>span:nth-child(2)]:leading-tight
        "
      >
        {children}
      </div>
    </section>
  );
}
