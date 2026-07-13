export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[#09090B] px-6 py-10">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          🚀 AI Image to Prompt Generator
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Turn Any Image Into
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            The Perfect AI Prompt
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Upload any image and instantly generate detailed prompts for ChatGPT,
          Midjourney, Flux, Gemini, Ideogram, Stable Diffusion and more.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-white/10 bg-[#111] px-4 py-2 text-sm text-gray-300">
            ✅ 100% Free
          </span>

          <span className="rounded-full border border-white/10 bg-[#111] px-4 py-2 text-sm text-gray-300">
            ⚡ No Signup Required
          </span>

          <span className="rounded-full border border-white/10 bg-[#111] px-4 py-2 text-sm text-gray-300">
            🚀 Fast AI Prompt Generation
          </span>
        </div>
      </div>
    </section>
  );
}