import React from 'react';

export const ArticleCard = ({ category, title, description, imageSrc }) => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto Izquierda */}
        <div>
          <span className="font-bold text-gray-400 uppercase tracking-wider text-sm mb-4 block">
            {category}
          </span>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-black leading-tight">
            {title}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Imagen Derecha (Caja Gris) */}
        <div className="h-64 md:h-96 w-full bg-gray-300 rounded-3xl overflow-hidden relative">
          {imageSrc && (
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
          )}
        </div>
      </div>
    </div>
  );
};