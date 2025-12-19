"use client";

export default function GatheringsHero({ children }) {
  return (
    <section
      className="
        
        w-full
        min-h-[70vh]
        bg-[#0A6CFF]
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/assets/images/oceanos blanco.png"
          alt=""
          className="
            absolute
            top-1/3
            -translate-y-1/2
            right-[-18%]
            w-[38%]
            max-w-none
            opacity-90
          "
        />
      </div>

      {/* Contenido */}
      <div
  className="
    relative
    z-10
    max-w-[760px]
    px-6
    text-center

    [&>div]:text-wrap:balance

    [&>div>span]:inline
    [&>div>span]:text-white
    [&>div>span]:font-inter

    [&>div>span:first-child]:text-4xl
    [&>div>span:first-child]:opacity-90
    [&>div>span:first-child]:after:content-['\00A0']

    [&>div>span:nth-child(2)]:font-dela
    [&>div>span:nth-child(2)]:text-4xl
    [&>div>span:nth-child(2)]:leading-[1.15]
   
  "
>
  {children}
</div>

    </section>
  );
}
