"use client";
import React from "react";
import Image from "next/image";

export default function WeAreHero({ children }) {
  return (
    <section
      className="
        relative w-screen left-1/2 -translate-x-1/2
        min-h-screen
        bg-[#F90068]
        flex items-center justify-center
        overflow-hidden
        py-24
        px-8
      "
      
    >
      {/* Imagen decorativa */}
      <div
        className="
          absolute
          top-0
          right-0
          translate-x-[20%]
          translate-y-[-35%]
          w-[45%]
          max-w-[1200px]
          pointer-events-none
        "
      >
        <Image
          src="/assets/images/puntitos blanco.png"
          alt="Decoración puntitos"
          width={720}
          height={720}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* TEXTO */}
      <div
        className="
          relative z-10
          text-center
          text-white
          max-w-6xl
        + -translate-y-[18vh]

          /* Línea 1 (pequeña, Inter) */
          [&>p:first-child]:text-[2rem]
          [&>p:first-child]:leading-[1]
          [&>p:first-child]:font-inter

          /* Línea 2 (grande, Dela Gothic) */
          [&>p:nth-child(2)]:text-[2rem]
          [&>p:nth-child(2)]:sm:text-[2rem]
          [&>p:nth-child(2)]:md:text-[2rem]
          [&>p:nth-child(2)]:leading-[1]
          [&>p:nth-child(2)]:font-dela
          [&>p:nth-child(2)]:font-bold
          [&>p:nth-child(2)]:my-2

          /* Línea 3 (media, Inter) */
          [&>p:nth-child(3)]:text-[2rem]
          [&>p:nth-child(3)]:leading-[1]
          [&>p:nth-child(3)]:font-inter
        "
      >
        {children}
      </div>
    </section>
  );
}
