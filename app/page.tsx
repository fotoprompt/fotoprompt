"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UploadBox from "@/components/UploadBox";
import ResultBox from "@/components/ResultBox";
import HowItWorks from "@/components/HowItWorks";

import { AppProvider } from "@/context/AppContext";

export default function Home() {
  return (
    <AppProvider>
      <main className="bg-[#09090B] min-h-screen">
        <Navbar />

        <Hero />

        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <UploadBox />

            <ResultBox />
          </div>
        </section>
        <HowItWorks />
      </main>
    </AppProvider>
  );
}