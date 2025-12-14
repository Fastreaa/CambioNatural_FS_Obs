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
        /* CORREGIDO: Alineación superior e izquierda */
        flex items-start justify-start 
        overflow-hidden
        py-24
        px-8
      "
    >
      {/* Imagen decorativa (Se mantiene igual) */}
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
          /* CORREGIDO: Alineación a la izquierda */
          text-center
          text-white
          /* Ancho para forzar el salto de línea de la referencia */
          max-w-4xl 
          mx-auto
          w-full 
          /* Posición alta */
          mt-[14vh] 
          
          /* Aplicamos estilos base que se heredarán */
          text-[2rem]
          leading-[1]
          font-inter
          
          /* Estilos para el texto grande (lo aplicas en el MDX) */
          /* Aquí puedes añadir clases para el div contenedor si lo necesitas */
        "
      >
        {children}
      </div>
    </section>
  );
}