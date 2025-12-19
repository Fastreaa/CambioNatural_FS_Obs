"use client";

export function ToolsClosingSection({ children }) {
  return (
    <section className="w-full py-40">

      {/* BLOQUE EDITORIAL (DESPLAZADO A LA DERECHA) */}
      <div className="max-w-5xl ml-[20vw] px-0">
        <div
          className="
            flex flex-col gap-24

            [&_.tools-body]:text-left
            [&_.tools-body]:font-inter
            [&_.tools-body]:text-2xl
            [&_.tools-body]:leading-relaxed
            [&_.tools-body]:max-w-2xl

            [&_.tools-title]:font-dela
            [&_.tools-title]:font-black
            [&_.tools-title]:tracking-tight
          "
        >
          {children?.[0]}
        </div>
      </div>

      {/* FOOTER (CENTRADO AL VIEWPORT) */}
      <div className="w-full mt-32 flex justify-center">
        <div
          className="
            tools-footer
            font-inter
            text-2xl
            text-center
          "
        >
          {children?.[1]}
        </div>
      </div>

    </section>
  );
}
