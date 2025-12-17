"use client";

export default function UpcomingEventsSection({ children }) {
  return (
    <section className="w-full bg-[#0A6CFF] py-40">
      <div className="max-w-7xl mx-auto px-12 flex flex-col gap-24">
        
        {/* Título sección */}
        <div
          className="
            text-white
            font-dela
            text-4xl
            uppercase
          "
        >
          UPCOMING EVENTS
        </div>

        {children}

      </div>
    </section>
  );
}
