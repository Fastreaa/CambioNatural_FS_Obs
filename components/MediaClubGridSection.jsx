"use client";

export default function MediaClubGridSection({ children }) {
  return (
    <section className="w-full bg-[#1FB64F] py-40">
      <div
        className="
          max-w-7xl
          mx-auto
          px-12
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-24
        "
      >
        {children.map((child, index) => (
          <div key={index} className="flex flex-col gap-6">
            
            {/* Imagen */}
            <div
              className="
                w-full
                h-[260px]
                bg-transparent
                rounded-2xl
                overflow-hidden

                [&>img]:w-full
                [&>img]:h-full
                [&>img]:object-cover
              "
            >
              {child.props.children?.[0]}
            </div>

            {/* Texto */}
            <div
              className="
                text-black
                max-w-md

                [&>div>span]:block
                [&>div>span]:font-inter
                [&>div>span]:text-2xl
                [&>div>span]:leading-relaxed
                [&>div>span]:mb-3

                [&>div>span:last-child]:mb-0
              "
            >
              {child.props.children?.[1]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
