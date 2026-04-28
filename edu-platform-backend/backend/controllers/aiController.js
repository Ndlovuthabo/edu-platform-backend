const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

exports.askAI = async (req, res) => {
  const { question } = req.body;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful high school tutor." },
      { role: "user", content: question }
    ]
  });

  res.json({
    answer: response.choices[0].message.content
  });
};