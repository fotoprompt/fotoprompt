import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const SYSTEM_PROMPT = `
You are the world's best AI Prompt Engineer.

Analyze every uploaded image with great attention to detail.

Never explain your reasoning.

Return ONLY the final prompt.
`;

function getModelRules(model: string) {
  switch (model) {
    case "Midjourney":
      return `
Create a production-quality Midjourney prompt.

Requirements:
- Use professional photography vocabulary.
- Mention subject.
- Mention composition.
- Mention lighting.
- Mention camera angle.
- Mention lens only if appropriate.
- Mention colors.
- Mention textures.
- Mention background.
- Mention mood.
- Mention quality.

Finish with:

--ar (best aspect ratio)
--style raw
--v 7

Return ONLY the prompt.
`;

    case "Flux":
      return `
Create a professional Flux prompt.

Use natural language only.

Do NOT use Midjourney parameters.

Return ONLY the prompt.
`;

    case "ChatGPT":
      return `
Create a detailed ChatGPT image generation prompt.

Return ONLY the prompt.
`;

    case "Gemini":
      return `
Create a detailed Gemini image generation prompt.

Return ONLY the prompt.
`;

    case "Ideogram":
      return `
Create an Ideogram prompt.

If the image contains text,
describe the typography accurately.

Return ONLY the prompt.
`;

    case "Stable Diffusion":
      return `
Return exactly this format:

Prompt:
...

Negative Prompt:
...

Include a professional negative prompt.

Return ONLY this output.
`;

    default:
      return "";
  }
}

function getStyleRules(style: string) {
  switch (style) {
    case "Photorealistic":
      return `
The image MUST look completely realistic.

Avoid anime, cartoon or illustration.
`;

    case "Anime":
      return `
Generate a beautiful anime illustration.

Do not make it realistic.
`;

    case "Illustration":
      return `
Generate a high-quality digital illustration.
`;

    case "Cinematic":
      return `
Use cinematic lighting and dramatic composition.
`;

    case "Oil Painting":
      return `
Make it resemble a traditional oil painting.
`;

    case "Sketch":
      return `
Generate a pencil sketch style.
`;

    case "Pixel Art":
      return `
Generate pixel art.
`;

    case "3D Render":
      return `
Generate a realistic 3D render.
`;

    default:
      return "";
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const image = formData.get("image") as File | null;

    const model =
      (formData.get("model") as string) || "ChatGPT";

    const style =
      (formData.get("style") as string) || "Photorealistic";

    const aspectRatio = 
      (formData.get("aspectRatio") as string) || "";

    const orientation = 
      (formData.get("orientation") as string) || "";  

    if (!image) {
      return NextResponse.json(
        {
          success: false,
          error: "No image received",
        },
        { status: 400 }
      );
    }

    const bytes = await image.arrayBuffer();

    const base64 = Buffer.from(bytes).toString("base64");

    const prompt = `
${SYSTEM_PROMPT}

Selected AI Model:

${model}

Selected Style:

${style}

Detected Aspect Ratio:

${aspectRatio}

Image Orientation:

${orientation}

${getModelRules(model)}

${getStyleRules(style)}

Analyze the uploaded image carefully.

Identify:

- Main subject
- Composition
- Camera angle
- Lighting
- Colors
- Textures
- Materials
- Background
- Environment
- Mood
- Artistic details

Respect the selected style exactly.

Always respect the detected aspect ratio and image orientation.

If the selected AI model is Midjourney:

- Use --ar ${aspectRatio}
- Never guess another aspect ratio.

If the selected AI model is NOT Midjourney:

- Do NOT include Midjourney parameters.

Never use another style.

Return your answer as VALID JSON only.

Format:

{
  "prompt": "...",
  "analysis": {
    "subject": "...",
    "category": "...",
    "lighting": "...",
    "style": "...",
    "complexity": "...",
    "promptLength": "Short | Medium | Long"
  }
}

Do not use markdown.

Do not wrap the JSON inside code blocks.

Return ONLY valid JSON.
`;

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: [
        {
          inlineData: {
            mimeType: image.type,
            data: base64,
          },
        },
        {
          text: prompt,
        },
      ],
    });

try {
  const result = JSON.parse(response.text!);

  return NextResponse.json({
    success: true,
    prompt: result.prompt,
    analysis: result.analysis,
  });
} catch {
  return NextResponse.json({
    success: true,
    prompt: response.text,
    analysis: null,
  });
}

  } catch (error: any) {
    console.error(error);



    const message =
  error?.message || "Unknown error";

if (
  message.includes("503") ||
  message.includes("UNAVAILABLE") ||
  message.includes("high demand")
) {
  return NextResponse.json(
    {
      success: false,
      error:
        "⚠️ Gemini is currently busy. Please try again in a few moments.",
    },
    { status: 503 }
  );
}

return NextResponse.json(
  {
    success: false,
    error: "Something went wrong. Please try again.",
  },
  { status: 500 }
);


  }
}