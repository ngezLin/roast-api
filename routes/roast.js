import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(
      `Roast this brutally but funny as unemployed person: ${text}`
    );

    const roast = result.response.text();

    return res.status(200).json({ roast });
  } catch (err) {
    console.error("Gemini API error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
