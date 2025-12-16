"use client";

import Image from "next/image";

export default function ToolsSection({ children }) {
  return (
    <section className="relative w-full bg-[#EED30F] py-80 overflow-hidden">

      {/* FONDO DECORATIVO – CUADRÍCULA */}
      <div className="absolute left-80 top-[-1rem] z-0 w-[420px] opacity-100">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          {/* TEXTO */}
          <div
            className="
              flex flex-col gap-4 max-w-xl

              [&_.tools-normal]:font-inter
              [&_.tools-normal]:text-[2rem]
              [&_.tools-normal]:tracking-widest
              [&_.tools-normal]:uppercase

              [&_.tools-gothic]:font-gothic
              [&_.tools-gothic]:font-black
              [&_.tools-gothic]:text-5xl
              [&_.tools-gothic]:leading-tight
            "
          >
            {children}
          </div>

          {/* CARD GRIS */}
          <div className="flex justify-end">
            <div className="w-[460px] h-[360px] rounded-3xl bg-[#E6E6E6]" />
          </div>

        </div>
      </div>
    </section>
  );
}
