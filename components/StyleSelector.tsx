"use client";

import { useApp } from "@/context/AppContext";

const styles = [
  "Photorealistic",
  "Cinematic",
  "Anime",
  "Illustration",
  "3D Render",
  "Sketch",
  "Oil Painting",
  "Pixel Art",
];

export default function StyleSelector() {
  const { style: selected, setStyle } = useApp();

  return (
    <div className="mt-10">
      <h3 className="mb-6 text-center text-xl font-bold text-white">
        Choose Style
      </h3>

      <div className="flex flex-wrap justify-center gap-3">
        {styles.map((style) => (
          <button
            key={style}
            onClick={() => setStyle(style)}
            className={`rounded-full px-5 py-3 transition ${
              selected === style
                ? "bg-violet-600 text-white"
                : "bg-[#171717] text-gray-300 hover:bg-violet-600/20"
            }`}
          >
            {style}
          </button>
        ))}
      </div>
    </div>
  );
}