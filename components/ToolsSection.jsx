"use client";

import Image from "next/image";

export default function ToolsSection({ children }) {
  return (
    <section className="relative w-full bg-[#EED30F] py-80 overflow-hidden">

      {/* FONDO DECORATIVO – CUADRÍCULA */}
      <div className="absolute left-0 top-[-1rem] z-0 w-[400px] opacity-100">
        <Image
          src="/assets/images/cuadriculablanco.png"
          alt=""
          width={420}
          height={420}
          className="object-contain"
          priority
        />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
       <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center">

          {/* TEXTO */}
          <div
            className="
            
          [&_.tools-normal]:font-inter
          [&_.tools-normal]:text-base
          [&_.tools-normal]:block
          [&_.tools-normal]:mb-6
          [&_.tools-normal]:tracking-widest
          [&_.tools-normal]:uppercase
          [&_.tools-normal]:opacity-80

          [&_.tools-gothic]:font-dela
          [&_.tools-gothic]:font-black
          [&_.tools-gothic]:text-4xl
          [&_.tools-gothic]:leading-tight
          [&_.tools-gothic]:max-w-[520px]

            "
          >
            {children?.[0]}
          </div>

          {/* IMAGEN DESDE MDX */}
          <div className="flex justify-end">
            <div
              className="
                w-[460px]
                h-[360px]
                rounded-3xl
                overflow-hidden
               [&:empty]:bg-[#E6E6E6]

                [&>img]:w-full
                [&>img]:h-full
                [&>img]:object-cover
              "
            >
              {children?.[1]}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
