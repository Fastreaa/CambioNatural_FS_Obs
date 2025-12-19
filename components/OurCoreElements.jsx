"use client";

export default function OurCoreElements({ children }) {
  return (
    <section className="w-full bg-white py-40">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Título sección */}
        <h2 className="font-dela text-4xl font-black uppercase mb-32">
          OUR CORE ELEMENTS
        </h2>

        {/* Lista */}
        <div
          className="
            flex flex-col gap-44

            /* Cada bloque */
            [&>div]:grid
            [&>div]:grid-cols-[320px_1fr]
            [&>div]:gap-24
            [&>div]:items-start

            /* Alternar composición */
            [&>div:nth-child(even)]:grid-cols-[1fr_320px]
            [&>div:nth-child(even)>img]:order-2
            [&>div:nth-child(even)>div]:order-1

            /* IMÁGENES */
            [&>div>img]:w-full
            [&>div>img]:max-w-[320px]
            [&>div>img]:h-auto

            /* TEXTO */
            [&>div>div]:mt-24

            /* Primer span = título */
            [&>div>div>span:first-child]:block
            [&>div>div>span:first-child]:font-dela
            [&>div>div>span:first-child]:text-3xl
            [&>div>div>span:first-child]:leading-tight
            [&>div>div>span:first-child]:mb-6

            /* Demás spans = cuerpo */
            [&>div>div>span:not(:first-child)]:block
            [&>div>div>span:not(:first-child)]:font-inter
            [&>div>div>span:not(:first-child)]:text-3xl
            [&>div>div>span:not(:first-child)]:text-gray-700
            [&>div>div>span:not(:first-child)]:max-w-md
          "
        >
          {children}
        </div>

      </div>
    </section>
  );
}
