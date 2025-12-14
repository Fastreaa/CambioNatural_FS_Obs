"use client";

export default function OurCoreElements({ children }) {
  return (
    <section className="w-full bg-white py-32">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Título */}
        <h2 className="font-dela text-4xl font-black uppercase mb-24">
          OUR CORE ELEMENTS
        </h2>

        {/* Lista */}
        <div
          className="
            flex flex-col gap-32

            /* Cada bloque */
            [&>div]:grid
            [&>div]:grid-cols-[140px_1fr]
            [&>div]:gap-16
            [&>div]:items-center

            /* Alternar layout */
            [&>div:nth-child(even)]:grid-cols-[1fr_140px]
            [&>div:nth-child(even)>img]:order-2
            [&>div:nth-child(even)>div]:order-1

            /* Texto */
            [&>div>div>h3]:font-dela
            [&>div>div>h3]:text-xl
            [&>div>div>h3]:font-bold
            [&>div>div>h3]:mb-4

            [&>div>div>p]:font-inter
            [&>div>div>p]:text-lg
            [&>div>div>p]:text-gray-700
            [&>div>div>p]:max-w-xl
          "
        >
          {children}
        </div>

      </div>
    </section>
  );
}

