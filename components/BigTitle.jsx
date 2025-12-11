import React from 'react';

export const BigTitle = ({ subtitle, maintitle }) => {
  return (
    <div className="w-full py-24 text-center px-4">
      <p className="text-blue-500 font-bold tracking-widest text-sm md:text-base mb-2 uppercase">
        {subtitle}
      </p>
      <h2 className="text-6xl md:text-8xl font-black text-blue-500 uppercase tracking-tighter">
        {maintitle}
      </h2>
    </div>
  );
};