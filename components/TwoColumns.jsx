import React from 'react';

export const TwoColumns = ({ children }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg leading-relaxed text-gray-800">
        {children}
      </div>
    </div>
  );
};