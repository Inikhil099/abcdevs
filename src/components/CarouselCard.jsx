import React from "react";

function CarouselCard({ title, desc, buttonTitle }) {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-[20px] relative">
      <div className="absolute inset-0 bg-white/40" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 py-12 md:py-16 max-w-4xl">
        {/* Heading */}
        <h1 className="text-5xl md:text-5xl font-bold leading-tight text-[#222]">
          {title}
        </h1>

        {/* Description */}
        <div className="mt-8 space-y-4 text-lg font-semibold md:text-xl leading-relaxed">
          <p>{desc}</p>
        </div>

        {/* Button */}
        <button className="mt-5 px-4 carouselbuttonanimation py-3 cursor-pointer rounded-full bg-[#1796e6] text-white text-xl font-medium hover:opacity-90 transition">
          {buttonTitle}
        </button>
      </div>
    </div>
  );
}

export default CarouselCard;
