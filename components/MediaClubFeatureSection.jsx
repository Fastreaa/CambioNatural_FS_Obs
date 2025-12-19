"use client";

export default function MediaClubFeatureSection({ children }) {
  return (
    <section
      className="
        relative
        w-full
        bg-[#1FB64F]
        py-40
        overflow-hidden
      "
    >
      {/* Fondo decorativo izquierda */}
      <div
        className="
          absolute
          left-[-100px]
          top-1/2
          -translate-y-1/2
          w-[420px]
          h-[420px]
          pointer-events-none
          opacity-90
        "
      >
        <img
          src="/assets/images/cuadriculablanco.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Contenido */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-12
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-32
          items-center
        "
      >
        {/* Texto izquierda */}
        <div
          className="
            text-black
            max-w-xl

            [&>div>span]:block

            /* TÍTULO */
            [&>div>span:first-child]:font-dela
            [&>div>span:first-child]:uppercase
            [&>div>span:first-child]:text-4xl
            [&>div>span:first-child]:leading-tight
            [&>div>span:first-child]:mb-8

            /* TEXTO */
            [&>div>span:nth-child(2)]:font-inter
            [&>div>span:nth-child(2)]:text-2xl
            [&>div>span:nth-child(2)]:leading-relaxed
            [&>div>span:nth-child(2)]:mb-6

            /* LINK */
            [&>div>span:nth-child(3)]:font-inter
            [&>div>span:nth-child(3)]:text-base
            [&>div>span:nth-child(3)]:underline
            [&>div>span:nth-child(3)]:cursor-pointer
          "
        >
          {children?.[0]}
        </div>

        {/* Card derecha */}
        <div
          className="
            bg-transparent
            rounded-3xl
            p-8
            relative
            overflow-hidden
          "
        >
          {/* Título card */}
          <div
            className="
              absolute
              top-6
              right-6
              font-dela
              text-3xl
              uppercase
              z-10
            "
          >
            {/*Titulo opcional*/}
          </div>

          {/* Imagen */}
          <div
            className="
              w-full
              h-[360px]
              rounded-2xl
              overflow-hidden

              [&>img]:w-full
              [&>img]:h-full
              [&>img]:object-cover
            "
          >
            {children?.[1]}
          </div>
        </div>
      </div>
    </section>
  );
}
