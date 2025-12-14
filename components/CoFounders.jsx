"use client";

import React from "react";
import Image from "next/image";
import TeamMember from "./TeamMember";

const founders = [
  {
    name: "Cesar Jerónimo",
    role: "LinkedIn",
    img: "/assets/images/cesar esquinca fhotoweb white.png",
  },
  {
    name: "Blaga",
    role: "LinkedIn",
    img: "/assets/images/Blaga fhotoweb white.png",
  },
  {
    name: "Marcelo Llamas",
    role: "LinkedIn",
    img: "/assets/images/together.png" // fallback or replace with correct foto if you have another
  },
];

export default function CoFounders() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
      {founders.map((f) => (
        <TeamMember key={f.name} name={f.name} role={f.role} img={f.img} />
      ))}
    </div>
  );
}
