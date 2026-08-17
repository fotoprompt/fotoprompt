import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FotoPrompt — From Image to Prompt",
  description: "Turn visual references into clear, detailed AI prompts with FotoPrompt.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
