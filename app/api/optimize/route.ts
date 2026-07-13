import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        {
          success: false,
          error: "Prompt is required",
        },
        { status: 400 }
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: `
You are an expert AI Prompt Engineer.

Improve the following prompt.

Rules:

- Keep the original meaning.
- Add more visual details.
- Improve lighting.
- Improve composition.
- Improve textures.
- Improve realism.
- Improve camera description.
- Improve atmosphere.

Return ONLY the improved prompt.

Prompt:

${prompt}
`,
    });

    return NextResponse.json({
      success: true,
      prompt: response.text,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}