"use client";
import React from "react";

export default function WeAreSecondSection({ children }) {
  return (
    <section className="w-full bg-[#F90068] py-0">
      <div
        className="
          max-w-7xl mx-auto px-8
          grid grid-cols-1 md:grid-cols-2
          gap-20 items-center
        "
      >
        {/* Placeholder imagen */}
        <div className="w-full h-[620px] bg-gray-300 rounded-3xl" />

        {/* Texto inyectado desde MDX */}
     <div
       className="
            text-white
            max-w-xl

            /* TÍTULO */
            [&>span:first-child]:font-dela
            [&>span:first-child]:text-[2rem]
            [&>span:first-child]:leading-[1.1]
            [&>span:first-child]:block
            [&>span:first-child]:mb-4

            /* TEXTO */
            [&>span:not(:first-child)]:font-inter
            [&>span:not(:first-child)]:text-[2rem]
            [&>span:not(:first-child)]:leading-[1.6]
            [&>span:not(:first-child)]:block
          "
      >
          {children}
        </div>    
      </div>
    </section>
  );
}
