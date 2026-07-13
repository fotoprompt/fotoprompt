"use client";

import Image from "next/image";

import { useApp } from "@/context/AppContext";

const models = [
  {
    name: "ChatGPT",
    logo: "/logos/chatgpt.svg",
  },
  {
    name: "Midjourney",
    logo: "/logos/midjourney.svg",
  },
  {
    name: "Flux",
    logo: "/logos/flux.svg",
  },
  {
    name: "Gemini",
    logo: "/logos/gemini.svg",
  },
  {
    name: "Ideogram",
    logo: "/logos/ideogram.svg",
  },
  {
    name: "StableDiffusion",
    logo: "/logos/stable-diffusion.svg",
  },
];

export default function ModelSelector() {
  const { model: selected, setModel } = useApp();

  return (
    <div className="mt-10">
      <h3 className="mb-6 text-center text-xl font-bold text-white">
        Choose AI Model
      </h3>

      <div className="grid grid-cols-3 gap-4">
        {models.map((model) => (
          <button
            key={model.name}
            onClick={() => setModel(model.name)}
            className={`h-28 w-full rounded-2xl border px-4 py-4 transition-all duration-300 ${
              selected === model.name
                ? "border-violet-500 bg-violet-600/20 text-white shadow-lg shadow-violet-600/20"
                : "border-white/10 bg-[#171717] text-gray-300 hover:border-violet-500 hover:bg-violet-600/10"
            }`}
          >

            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src={model.logo}
                alt={model.name}
                width={42}
                height={42}
              />

              <span className="text-center text-sm font-semibold leading-tight">
                {model.name}
              </span>
            </div>


          </button>
        ))}
      </div>
    </div>
  );
}