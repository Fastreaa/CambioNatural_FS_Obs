"use client";

export default function CoreElements({ children }) {
  return (
    <section className="w-full bg-[#F90068] py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div
          className="
            grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-24

            [&>div>h3]:font-dela
            [&>div>h3]:text-white
            [&>div>h3]:text-xl
            [&>div>h3]:uppercase
            [&>div>h3]:mb-4

            [&>div>p]:font-inter
            [&>div>p]:text-white
            [&>div>p]:text-sm
            [&>div>p]:leading-relaxed
            [&>div>p]:mb-4

            [&>div>a]:font-inter
            [&>div>a]:text-white
            [&>div>a]:text-sm
            [&>div>a]:underline
          "
        >
          {children}
        </div>

      </div>
    </section>
  );
}
