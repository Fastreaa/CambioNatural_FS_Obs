// src/components/SectionTransition.jsx
"use client";
import React from 'react';
import Image from 'next/image';

export const SectionTransition = ({ text, imageSrc, imageAlt = "Imagen decorativa" }) => {
  return (
    <div className="container mx-auto px-6 py-20 flex flex-col items-center justify-center">
      
      {/* Grid 2 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 w-full items-center">

        {/* Texto */}
        <div className="text-left">
          <h3 className="text-2xl md:text-4xl font-medium leading-snug text-black">
            {text}
          </h3>
        </div>

        {/* Imagen */}
        <div 
          className="
            relative w-full 
            h-56 md:h-96
            flex justify-center items-center
          "
        >
          {imageSrc ? (
            <Image
              src={imageSrc}              // ← ahora sí usa la prop correcta
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"   // ← evita hydration mismatch
              style={{ objectFit: "contain" }}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-32 md:w-48 shrink-0 bg-pink-500 rounded-full h-full"></div>
          )}
        </div>

      </div>
    </div>
  );
};
