"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";

export function useGeneratePrompt() {
  const {
    imageFile,
    model,
    style,
    aspectRatio,
    orientation,
    setPrompt,
    setAnalysis,
    setQualityScore,
    wordCount,
    setWordCount,

    characterCount,
    setCharacterCount,

    readingTime,
    setReadingTime,

    tokenCount,
    setTokenCount,
  } = useApp();

  const [loading, setLoading] = useState(false);

  async function generatePrompt() {
    if (!imageFile) {
      alert("Please upload an image first.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("image", imageFile);
      formData.append("model", model);
      formData.append("style", style);
      formData.append("aspectRatio", aspectRatio);
      formData.append("orientation", orientation);

      const response = await fetch("/api/generate", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setPrompt(data.prompt);
        setAnalysis(data.analysis);
        const words = data.prompt.trim().split(/\s+/).length;

        let score = 50;

        if (words > 40) score += 10;
        if (words > 70) score += 10;
        if (words > 100) score += 10;

        if (data.analysis) score += 10;

        if (model === "Midjourney") score += 5;
        if (style !== "") score += 5;

        if (score > 100) score = 100;

        setQualityScore(score);
        
      setWordCount(words);

        setCharacterCount(data.prompt.length);

        setReadingTime(Math.max(1, Math.ceil(words / 200)));

        setTokenCount(Math.ceil(data.prompt.length / 4));

      } else {
        setPrompt(`❌ ${data.error}`);
        setAnalysis(null);
      }
    } catch (error) {
      console.error(error);
      setPrompt("Failed to connect to API.");
      setAnalysis(null);
    } finally {
      setLoading(false);
    }
  }

  return {
    generatePrompt,
    loading,
  };
}