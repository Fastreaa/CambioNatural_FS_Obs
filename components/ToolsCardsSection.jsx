"use client";

export function ToolsCardsSection({ children }) {
  return (
    <section className="w-full py-1">
      <div className="max-w-7xl mx-auto px-8">

        <div className="
          grid grid-cols-1 md:grid-cols-3
          gap-16
        ">
          {children}
        </div>

      </div>
    </section>
  );
}
