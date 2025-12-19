"use client";

import React from 'react';
import Image from 'next/image';

export const ArticleCard = ({ category, title, description, imageSrc }) => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="bg-white shadow-xl rounded-[3rem] p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Texto Izquierda */}
        <div>
          {category && (
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
              {category}
            </p>
          )}

          <h3
            className="
              text-3xl md:text-5xl
              font-black
              font-dela
              uppercase
              mb-6
              text-black
              leading-tight
              tracking-tight
            "
          >
            {title}
          </h3>

          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Imagen Derecha */}
        <div className="h-64 md:h-96 w-full bg-transparent rounded-3xl overflow-hidden relative">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full object-cover"
              priority={true}
            />
          )}
        </div>

      </div>
    </div>
  );
};
