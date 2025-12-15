"use client";
import React from 'react';
import Image from 'next/image';

export const HeroSection = ({ title }) => { 
  return (
    <section
      className="
        w-screen relative left-1/2 -translate-x-1/2
        py-48 lg:py-[24rem]
        bg-[#FDFCF6]
      "
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/assets/images/Group592.png"
          alt="Fondo decorativo"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center max-w-7xl">

        <h1
          className="
            text-[1.0rem] md:text-[1.1rem] lg:text-[2.0rem]
            leading-[1.05]
            tracking-tight
            text-black
            max-w-5xl mx-auto
            font-normal
          "
        >
          {title}
        </h1>

        <p
          className="
            text-lg md:text-xl
            text-gray-800
            font-normal
            tracking-tight
            mt-4
          "
        ></p>

      </div>
    </section>
  );
};
