"use client";

import Image from "next/image";

const logos = [
  {
    src: "/assets/images/cambio_natural.png",
    alt: "Cambio Natural",
  },
  {
    src: "/assets/images/cambio_natural.png",
    alt: "Cambio Natural",
  },
  {
    src: "/assets/images/cambio_natural.png",
    alt: "Cambio Natural",
  },
  {
    src: "/assets/images/cambio_natural.png",
    alt: "Cambio Natural",
  },
  {
    src: "/assets/images/cambio_natural.png",
    alt: "Cambio Natural",
  },
];

export default function EcosystemLogos() {
  return (
    <div className="mt-24">
      <div className="flex flex-wrap items-center justify-center gap-16">
        {logos.map((logo, i) => (
          <div key={i} className="relative h-10 w-32 opacity-70">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
