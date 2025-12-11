import React from 'react';

export const HeroSection = ({ title }) => {
  return (
    // Aumentamos el padding vertical (py-32 md:py-48) para darle más aire arriba y abajo
    <section className="relative w-full py-32 md:py-48 overflow-hidden flex flex-col items-center justify-center text-center bg-white">
      
      {/* --- IMAGEN ESQUINA SUPERIOR IZQUIERDA --- */}
      {/* AJUSTES REALIZADOS:
          - w-64 md:w-[500px]: La hacemos mucho más grande (500px en escritorio).
          - -translate-x-1/4 -translate-y-1/4: La movemos más hacia arriba y a la izquierda para que se corte.
      */}
      <div className="absolute top-0 left-0 w-64 md:w-[500px] -translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none">
        <img 
            src="/images/mosaic-top-left.png" 
            alt="Decoración" 
            className="w-full h-auto object-contain" 
        />
      </div>

      {/* --- IMAGEN ESQUINA INFERIOR DERECHA --- */}
      {/* AJUSTES REALIZADOS:
          - w-72 md:w-[550px]: También la hacemos grande y prominente.
          - translate-x-1/4 translate-y-1/4: La empujamos hacia abajo y a la derecha.
      */}
      <div className="absolute bottom-0 right-0 w-72 md:w-[550px] translate-x-1/4 translate-y-1/4 z-0 pointer-events-none">
        <img 
            src="/images/mosaic-bottom-right.png" 
            alt="Decoración" 
            className="w-full h-auto object-contain"
        />
      </div>

      {/* --- CONTENIDO CENTRAL (Texto y Puntos) --- */}
      {/* relative z-10 asegura que el texto quede por encima de las imágenes */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        
        {/* Título Principal */}
        {/* max-w-4xl: Limita el ancho para que el texto no se estire demasiado */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-10 text-black">
          {title}
        </h1>
        
        {/* Los 4 puntos amarillos */}
        <div className="flex justify-center gap-6 mb-10">
          {/* Ajusté ligeramente el tamaño a w-5 h-5 md:w-6 md:h-6 para que se vean elegantes */}
          <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full"></div>
          <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full"></div>
          <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full"></div>
          <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full"></div>
        </div>

        {/* Subtítulo (Agregado según el diseño) */}
        <p className="text-lg md:text-xl text-gray-700 font-medium">
          We are collaborative supporting
        </p>

      </div>
    </section>
  );
};