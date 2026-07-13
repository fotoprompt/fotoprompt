"use client";

import {
  Upload,
  LoaderCircle,
  Trash2,
  RefreshCcw,
} from "lucide-react";

import { useRef, useState } from "react";
import { useGeneratePrompt } from "@/hooks/useGeneratePrompt";
import { useApp } from "@/context/AppContext";
import ModelSelector from "./ModelSelector";
import StyleSelector from "./StyleSelector";
import { extractColors } from "extract-colors";

export default function UploadBox() {
  const inputRef = useRef<HTMLInputElement>(null);

const {
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

} = useApp();

  const { generatePrompt, loading } = useGeneratePrompt();

  const [dragActive, setDragActive] = useState(false);

  function loadImage(file: File) {
  if (!file.type.startsWith("image/")) return;

  const preview = URL.createObjectURL(file);

  setImagePreview(preview);
  setImageFile(file);
  setImageSize(file.size);

  const img = new Image();

  img.onload = async () => {
  const width = img.width;
  const height = img.height;

  setImageWidth(width);
  setImageHeight(height);

  // Orientation
  if (width === height) {
    setOrientation("Square");
  } else if (width > height) {
    setOrientation("Landscape");
  } else {
    setOrientation("Portrait");
  }


const ratio = width / height;

if (Math.abs(ratio - 1) < 0.03) {
  setAspectRatio("1:1");
} else if (Math.abs(ratio - 16 / 9) < 0.03) {
  setAspectRatio("16:9");
} else if (Math.abs(ratio - 9 / 16) < 0.03) {
  setAspectRatio("9:16");
} else if (Math.abs(ratio - 3 / 2) < 0.03) {
  setAspectRatio("3:2");
} else if (Math.abs(ratio - 2 / 3) < 0.03) {
  setAspectRatio("2:3");
} else if (Math.abs(ratio - 4 / 3) < 0.03) {
  setAspectRatio("4:3");
} else if (Math.abs(ratio - 3 / 4) < 0.03) {
  setAspectRatio("3:4");
} else if (Math.abs(ratio - 21 / 9) < 0.03) {
  setAspectRatio("21:9");
} else {
  setAspectRatio(`${ratio.toFixed(2)}:1`);
}
  
    const colors = await extractColors(img);
        setPalette(
      colors.slice(0, 5).map((color) => color.hex)
    );
    console.log(colors);
    };
    img.src = preview;

  
  }

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    loadImage(file);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);

    const file = e.dataTransfer.files?.[0];

    if (!file) return;

    loadImage(file);
  }

  return (
    <section>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`rounded-3xl border-2 border-dashed bg-[#111] p-10 text-center transition-all duration-300 ${
          dragActive
            ? "border-violet-400 bg-violet-600/10 scale-[1.01]"
            : "border-purple-600"
        }`}
      >
          {imagePreview ? (
            <>
              <img
                src={imagePreview}
                alt="Preview"
                className="mx-auto max-h-80 rounded-2xl shadow-2xl transition duration-300 hover:scale-[1.02]"
              />

            <div className="mt-5 rounded-xl border border-white/10 bg-[#09090B] p-4 text-left">

              <p className="truncate text-sm font-semibold text-white">
                📂 {imageFile?.name}
              </p>

               {/* 
              <p className="mt-2 text-sm text-gray-400">
                📐 {imageWidth} × {imageHeight}
                <span className="mx-2">•</span>
                💾 {(imageSize / 1024 / 1024).toFixed(2)} MB
              </p>
              */}
              
                  <p className="mt-1 text-sm text-gray-400">
                    🖼 {aspectRatio} • {orientation}
                  </p>

                  {palette.length > 0 && (
                    <div className="mt-5 border-t border-white/10 pt-4">

                      <p className="mb-3 text-sm font-semibold text-white">
                        🎨 Dominant Colors
                      </p>

                      <div className="flex gap-2">
                        {palette.map((color) => (
                          <button
                            key={color}
                            onClick={() => navigator.clipboard.writeText(color)}
                            title={`Copy ${color}`}
                            className="group"
                          >
                            <div
                              className="h-12 w-12 rounded-lg border border-white/10 transition duration-200 group-hover:scale-110"
                              style={{ backgroundColor: color }}
                            />

                            <p className="mt-2 text-center text-[10px] text-gray-500">
                              {color}
                            </p>
                          </button>
                        ))}
                      </div>

                    </div>
                  )}

            </div>
           


              {analysis && (
                <div className="mt-6 rounded-xl border border-white/10 bg-[#09090B] p-4">
                  <h3 className="mb-4 text-sm font-bold text-white">
                    🤖 AI Analysis
                  </h3>

                  <div className="space-y-2 text-sm text-gray-300">
                    <p>
                      <span className="font-semibold text-white">🐒 Subject:</span>{" "}
                      {analysis.subject}
                    </p>

                    <p>
                      <span className="font-semibold text-white">📂 Category:</span>{" "}
                      {analysis.category}
                    </p>

                    <p>
                      <span className="font-semibold text-white">💡 Lighting:</span>{" "}
                      {analysis.lighting}
                    </p>

                    <p>
                      <span className="font-semibold text-white">🎨 Style:</span>{" "}
                      {analysis.style}
                    </p>

                    <p>
                      <span className="font-semibold text-white">📈 Complexity:</span>{" "}
                      {analysis.complexity}
                    </p>

                    <p>
                      <span className="font-semibold text-white">✍ Prompt Length:</span>{" "}
                      {analysis.promptLength}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-4 flex gap-3">
              <button
                onClick={() => {
                  setImagePreview(null);
                  setImageFile(null);
                  setImageWidth(0);
                  setImageHeight(0);
                  setImageSize(0);
                }}
                disabled={loading}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 py-2 text-red-400 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
              <Trash2 size={18} />
              Remove
            </button>

              <button
                onClick={() => inputRef.current?.click()}
                disabled={loading}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 py-2 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
              >
              <RefreshCcw size={18} />
              Replace
            </button>
          </div>
            </>
          ) : (
          <>
            <Upload className="mx-auto h-16 w-16 text-purple-500" />

            <h2 className="mt-6 text-3xl font-bold text-white">
              Upload Your Image
            </h2>

            <p className="mt-3 text-gray-400">
              Drag & Drop or Click Below
            </p>
          </>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleImage}
        />

        {!imagePreview && (
          <button
            onClick={() => inputRef.current?.click()}
            disabled={loading}
            className="mt-8 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-bold text-white transition hover:scale-105 disabled:opacity-50"
          >
            Choose Image
          </button>
        )}

        {imagePreview && (
          <button
            onClick={generatePrompt}
            disabled={loading}
            className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-4 text-lg font-bold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <LoaderCircle
                  size={22}
                  className="animate-spin"
                />
                Analyzing Image...
              </>
            ) : (
              <>✨ Generate AI Prompt</>
            )}
          </button>
        )}

        <ModelSelector />

        <StyleSelector />
      </div>
    </section>
  );
}