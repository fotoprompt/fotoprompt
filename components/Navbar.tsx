export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="text-2xl font-extrabold tracking-tight text-white">
          Foto<span className="text-violet-500">Prompt</span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#" className="hover:text-white transition">
            API
          </a>

          <a href="#" className="hover:text-white transition">
            Blog
          </a>

          <button className="rounded-xl bg-violet-600 px-5 py-2 font-semibold text-white transition hover:bg-violet-500">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}