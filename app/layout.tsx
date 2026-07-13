import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DragDropProvider from "@/components/DragDropProvider";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FotoPrompt - Turn Any Image Into The Perfect AI Prompt",
  description:
    "Generate detailed AI prompts from any image for ChatGPT, Midjourney, Flux, Gemini, Stable Diffusion and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html

    lang="en"
    suppressHydrationWarning
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <DragDropProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
