"use client";

import { createContext, useContext, useState } from "react";

type ImageAnalysis = {
  subject: string;
  category: string;
  lighting: string;
  style: string;
  complexity: string;
  promptLength: string;
};

type AppContextType = {
  imagePreview: string | null;
  setImagePreview: (image: string | null) => void;

  imageFile: File | null;
  setImageFile: (file: File | null) => void;

  imageWidth: number;
  setImageWidth: (width: number) => void;

  imageHeight: number;
  setImageHeight: (height: number) => void;

  imageSize: number;
  setImageSize: (size: number) => void;

  aspectRatio: string;
  setAspectRatio: (ratio: string) => void;

  orientation: string;
  setOrientation: (orientation: string) => void;

  // NEW
  palette: string[];
  setPalette: (colors: string[]) => void;

  analysis: ImageAnalysis | null;
  setAnalysis: (analysis: ImageAnalysis | null) => void;

  qualityScore: number;
  setQualityScore: (score: number) => void;

  wordCount: number;
  setWordCount: (count: number) => void;

  characterCount: number;
  setCharacterCount: (count: number) => void;

  readingTime: number;
  setReadingTime: (time: number) => void;

  tokenCount: number;
  setTokenCount: (count: number) => void;

  model: string;
  setModel: (model: string) => void;

  style: string;
  setStyle: (style: string) => void;

  prompt: string;
  setPrompt: (prompt: string) => void;

  optimizedPrompt: string;
  setOptimizedPrompt: (prompt: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [imageSize, setImageSize] = useState(0);

  const [aspectRatio, setAspectRatio] = useState("");
  const [orientation, setOrientation] = useState("");

  // NEW
  const [palette, setPalette] = useState<string[]>([]);

  const [analysis, setAnalysis] = useState<ImageAnalysis | null>(null);
  const [qualityScore, setQualityScore] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [tokenCount, setTokenCount] = useState(0);

  const [model, setModel] = useState("ChatGPT");
  const [style, setStyle] = useState("Photorealistic");
  const [prompt, setPrompt] = useState("");
  const [optimizedPrompt, setOptimizedPrompt] = useState("");

  return (
    <AppContext.Provider
      value={{
        imagePreview,
        setImagePreview,

        imageFile,
        setImageFile,

        imageWidth,
        setImageWidth,

        imageHeight,
        setImageHeight,

        imageSize,
        setImageSize,

        aspectRatio,
        setAspectRatio,

        orientation,
        setOrientation,

        palette,
        setPalette,

        analysis,
        setAnalysis,

        qualityScore,
        setQualityScore,

        wordCount,
        setWordCount,

        characterCount,
        setCharacterCount,

        readingTime,
        setReadingTime,

        tokenCount,
        setTokenCount,

        model,
        setModel,

        style,
        setStyle,

        prompt,
        setPrompt,

        optimizedPrompt,
        setOptimizedPrompt,

      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return context;
}