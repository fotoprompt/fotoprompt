"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";

export function useOptimizePrompt() {
  const {
    prompt,
    setOptimizedPrompt,
  } = useApp();

  const [loading, setLoading] = useState(false);

  async function optimizePrompt() {
    console.log("Optimize clicked");
    if (!prompt) return;

    setLoading(true);

    try {
      const response = await fetch("/api/optimize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setOptimizedPrompt(data.prompt);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    optimizePrompt,
    loading,
  };
}