import React from 'react';

export const SectionTransition = ({ text }) => {
  return (
    <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-center gap-10">
      <h3 className="text-2xl md:text-4xl font-medium max-w-3xl leading-snug text-black">
        {text}
      </h3>
      {/* Imagen de la explosión rosa */}
      <div className="w-32 md:w-48 shrink-0">
         <img 
            src="/images/pink-explosion.png" 
            alt="Boom" 
            className="w-full h-auto"
            // Placeholder por si no tienes la imagen aún (círculo rosa)
            onError={(e) => {e.target.style.display='none'; e.target.parentNode.style.background='#EC4899'; e.target.parentNode.style.borderRadius='50%'; e.target.parentNode.style.height='100px';}}
         />
      </div>
    </div>
  );
};