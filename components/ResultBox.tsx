"use client";

import { useState } from "react";
import { Check, Copy, Loader2 } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { useOptimizePrompt } from "@/hooks/useOptimizePrompt";
import { motion } from "framer-motion";
export default function ResultBox() {
  const {
    prompt,
    optimizedPrompt,
    qualityScore,
    wordCount,
    characterCount,
    tokenCount,
    readingTime,
  } = useApp();

  const {
    optimizePrompt,
    loading: optimizing,
  } = useOptimizePrompt();

  const [copiedOriginal, setCopiedOriginal] = useState(false);
  const [copiedOptimized, setCopiedOptimized] = useState(false);

  async function copyOriginal() {
    if (!prompt) return;

    await navigator.clipboard.writeText(prompt);

    setCopiedOriginal(true);

    setTimeout(() => {
      setCopiedOriginal(false);
    }, 2000);
  }

  async function copyOptimized() {
    if (!optimizedPrompt) return;

    await navigator.clipboard.writeText(optimizedPrompt);

    setCopiedOptimized(true);

    setTimeout(() => {
      setCopiedOptimized(false);
    }, 2000);
  }

  return (
    <section className="h-full">
      <div className="h-full rounded-3xl border border-white/10 bg-[#111] p-8">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Generated Prompt
        </h2>

        {prompt && (
          <>
            {/* Prompt Quality */}

            <div className="mb-5 rounded-2xl border border-white/10 bg-[#09090B] p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-lg font-bold text-white">
                  ⭐ Prompt Quality
                </span>

                <span className="text-2xl font-bold text-violet-400">
                  {qualityScore}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-700"
                  style={{
                    width: `${qualityScore}%`,
                  }}
                />
              </div>

              <p className="mt-3 text-sm text-gray-400">
                {qualityScore >= 90
                  ? "Excellent Prompt"
                  : qualityScore >= 75
                  ? "Very Good Prompt"
                  : qualityScore >= 60
                  ? "Good Prompt"
                  : "Basic Prompt"}
              </p>
            </div>

            {/* Stats */}

            <div className="mb-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-[#09090B] p-4">
                <p className="text-xs text-gray-400">📝 Words</p>
                <p className="mt-1 text-xl font-bold text-white">
                  {wordCount}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#09090B] p-4">
                <p className="text-xs text-gray-400">🔤 Characters</p>
                <p className="mt-1 text-xl font-bold text-white">
                  {characterCount}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#09090B] p-4">
                <p className="text-xs text-gray-400">
                  📦 Estimated Tokens
                </p>

                <p className="mt-1 text-xl font-bold text-white">
                  {tokenCount}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#09090B] p-4">
                <p className="text-xs text-gray-400">
                  ⏱ Reading Time
                </p>

                <p className="mt-1 text-xl font-bold text-white">
                  {readingTime} min
                </p>
              </div>
            </div>
          </>
        )}

        {/* Prompt Area */}

        <div className="min-h-[520px] rounded-2xl bg-[#09090B] p-6">
          {!prompt ? (
            <span className="text-gray-500">
              Your generated prompt will appear here...
            </span>
          ) : (
            <>
              {/* Original */}

              <div className="flex items-center justify-between">
                <h3 className="font-bold text-violet-400">
                  GENERATED PROMPT
                </h3>

                <button
                  onClick={copyOriginal}
                  className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1 text-xs text-white transition hover:bg-white/10"
                >
                  {copiedOriginal ? (
                    <>
                      <Check size={14} className="text-green-400" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <p className="mt-4 whitespace-pre-wrap leading-8 text-gray-300">
                {prompt}
              </p>

              {/* Optimized */}

              {optimizing && (
                <div className="mt-8 animate-pulse rounded-2xl border border-white/10 bg-[#111] p-6">
                  <div className="mb-5 h-5 w-48 rounded bg-white/10"></div>

                  <div className="space-y-3">
                    <div className="h-4 w-full rounded bg-white/10"></div>
                    <div className="h-4 w-full rounded bg-white/10"></div>
                    <div className="h-4 w-5/6 rounded bg-white/10"></div>
                    <div className="h-4 w-full rounded bg-white/10"></div>
                    <div className="h-4 w-3/4 rounded bg-white/10"></div>
                    <div className="h-4 w-full rounded bg-white/10"></div>
                  </div>
                </div>
              )}

              {optimizedPrompt && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  <hr className="my-8 border-white/10" />

                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-emerald-400">
                      ✨ OPTIMIZED PROMPT
                    </h3>

                    <button
                      onClick={copyOptimized}
                      className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1 text-xs text-white transition hover:bg-white/10"
                    >
                      {copiedOptimized ? (
                        <>
                          <Check size={14} className="text-green-400" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy
                        </>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 whitespace-pre-wrap leading-8 text-gray-300">
                    {optimizedPrompt}
                  </p>
                </motion.div>
              )}
            </>
          )}
        </div>

        {prompt && (
            <button
              onClick={optimizePrompt}
              disabled={optimizing}
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-50"
            >
              {optimizing ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 size={20} className="animate-spin" />
                  Optimizing Prompt...
                </div>
              ) : (
                <>✨ Optimize Prompt</>
              )}
            </button>
        )}
      </div>
    </section>
  );
}