"use client";

export function ToolsHero({ children }) {
  return (
    <section className="w-full  bg-[#EED30F] py-32">
      <div className="container mx-auto px-6 max-w-5xl text-black">

        {/* Wrapper tipográfico */}
        <div
          className="

          flex flex-col gap-4
          text-center
          items-center

          [&_.tools-normal]:font-inter
          [&_.tools-normal]:text-3x1
          [&_.tools-normal]:md:text-3xl

          [&_.tools-highlight]:font-gothic
          [&_.tools-highlight]:text-3xl
          [&_.tools-highlight]:md:text-3xl
          [&_.tools-highlight]:font-black
        "
        >
          {children}
        </div>

      </div>
    </section>
  );
}
