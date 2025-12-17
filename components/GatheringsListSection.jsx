"use client";

export default function GatheringsListSection({ children }) {
  return (
    <section className="w-full bg-[#0A6CFF] py-40">
      <div
        className="
          max-w-7xl
          mx-auto
          px-12
          flex
          flex-col
          gap-32
        "
      >
        {children}
      </div>
    </section>
  );
}
