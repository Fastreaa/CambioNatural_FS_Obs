// src/components/TwoColumns.jsx (CORREGIDO)
import React from 'react';

export const TwoColumns = ({ children }) => {
  return (
    <section className="container mx-auto px-6 py-12 lg:py-24">
      <div
        className="
          grid grid-cols-1 md:grid-cols-2
          gap-x-12 gap-y-16 lg:gap-x-24 lg:gap-y-24
          text-left
        "
      >
        {children}
      </div>
    </section>
  );
};
