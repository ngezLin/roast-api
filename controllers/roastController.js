const { GoogleGenerativeAI } = require("@google/generative-ai");

// Load API key from .env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getRoast = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Roast the following input in a funny and sarcastic way as unemployed person: "${text}"`;

    const result = await model.generateContent(prompt);

    const roast = result.response.text();

    return res.json({ roast });
  } catch (err) {
    console.error("Gemini API error:", err);
    res.status(500).json({ error: "Something went wrong with Gemini API" });
  }
};

module.exports = { getRoast };
