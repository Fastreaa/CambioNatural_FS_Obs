"use client";

export function ToolsCard() {
  return (
    <div className="flex flex-col items-center gap-6">

      {/* Imagen / bloque */}
      <div className="w-full h-[320px] rounded-3xl bg-[#E6E6E6]" />

      {/* Líneas de texto */}
      <div className="w-full flex flex-col gap-3">
        <div className="h-3 bg-[#E6E6E6] w-full" />
        <div className="h-3 bg-[#E6E6E6] w-5/5" />
        <div className="h-3 bg-[#E6E6E6] w-5/5" />
      </div>

    </div>
  );
}
