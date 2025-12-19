"use client";
import React, { useState } from "react";
import { Button as BaseButton } from "./ui/moving-border";
import P1 from "../assets/p1.png";
import P2 from "../assets/p2.png";

export function MovingBorderDemo() {
  const cards = [
    {
      title: "Revive Website",
      description:
        "Platform kesehatan modern yang memudahkan pasien untuk konsultasi online, booking jadwal dokter, dan akses informasi medis terpercaya.",
      img: P1,
      tags: ["Figma", "UI/UX Design"],
    },
    {
      title: "Eventify",
      description:
        "aplikasi event dan konser yang menyatukan musik, artis, dan penggemar dalam satu gelombang pengalaman live. Temukan jadwal konser, beli tiket, dan dapatkan update real-time dari event favoritmu—lokal hingga internasional..",
      img: P2,
      tags: ["Figma", "Mobile App"],
    },
  ];

  return (
    <div className="space-y-8 px-12">
      <h3 className="mb-4 text-lg font-semibold">Projects</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((card, idx) => {
          const [hover, setHover] = useState(false);

          return (
            <BaseButton
              key={idx}
              as="div"
              borderRadius="1.75rem"
              containerClassName="h-auto w-full"
              className="flex flex-col items-start gap-4 p-4"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onTouchStart={() => setHover(true)}
              onTouchEnd={() => setHover(false)}
            >
              {/* Gambar ikut scale saat hover Button */}
              <div className="overflow-hidden w-full rounded-xl">
                <img
                  src={card.img}
                  alt={card.title}
                  className={`w-full h-auto object-cover transition-transform duration-300 ${
                    hover ? "scale-110" : "scale-100"
                  }`}
                />
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 text-blue-100 text-sm pt-2">
                {card.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center px-3 py-1 bg-[#0A4788] rounded-xl"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              {/* Judul & Deskripsi */}
              <h2 className="text-2xl sm:text-3xl font-bold text-left">
                {card.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-left">
                {card.description}
              </p>
            </BaseButton>
          );
        })}
      </div>
    </div>
  );
}
