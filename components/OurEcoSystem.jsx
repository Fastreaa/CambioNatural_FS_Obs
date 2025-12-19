"use client";

export default function OurEcoSystem({ children }) {
  return (
    <section className="w-full bg-white py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div
          className="
            flex flex-col gap-6
            text-left

            /* TÍTULO: <span><strong> */
            [&>span>strong]:font-dela
            [&>span>strong]:font-black
            [&>span>strong]:text-3xl
            [&>span>strong]:text-black
            [&>span>strong]:uppercase
            [&>span>strong]:block

            /* TEXTO: <span> normal */
            [&>span:not(:has(strong))]:font-inter
            [&>span:not(:has(strong))]:text-lg
            [&>span:not(:has(strong))]:leading-[-0.5]
            [&>span:not(:has(strong))]:text-gray-700
            [&>span:not(:has(strong))]:max-w-2xl
            [&>span:not(:has(strong))]:block
          "
        >
          {children}
        </div>
      </div>
    </section>
  );
}

