import axios from "axios";

const getHeadline = async (article: string) => {
  const response = await axios.post(
    "https://api.openai.com/v1/engines/davinci/completions",
    {
      prompt: article,
      max_tokens: 60,
      temperature: 0.5,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    },
  );

  return response.data.choices[0].text;
};

export default getHeadline;
