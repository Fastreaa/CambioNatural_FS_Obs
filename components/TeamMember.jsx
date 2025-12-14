"use client";

import Image from "next/image";

export default function TeamMember({ name, role, img, bg }) {
  return (
    <div className="flex flex-col items-center text-center">
      
      {/* Imagen + fondo */}
      <div className="relative mb-10 w-[260px] h-[260px]">
        
        {/* Fondo gráfico */}
        <div
          className={`
            absolute inset-0 rounded-full
            ${bg === "dots" && "bg-[url('/assets/images/puntitos blanco.png')]"}
            ${bg === "waves" && "bg-[url('/assets/images/ondas.png')]"}
            ${bg === "organic" && "bg-[url('/assets/images/forma-organica.png')]"}
            bg-cover bg-center
          `}
        />

        {/* Imagen */}
        <Image
          src={img}
          alt={name}
          fill
          className="relative z-10 object-cover rounded-full"
        />
      </div>

      {/* Nombre */}
      <span className="font-dela text-white text-xl uppercase">
        {name}
      </span>

      {/* Rol */}
      <span className="mt-2 font-inter text-sm uppercase tracking-widest text-white/80">
        {role}
      </span>
    </div>
  );
}
