import { Configuration, OpenAIApi } from "openai";

const api = async (input) => {
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: input,
    max_tokens: 1000,
    temperature: 0.5,
  });

  return response.data.choices[0].text.replace(/\n/g, "");
};

const featuredQuestion = [
  "What is java?",
  "What is javascript?",
  "What is AI?",
];
export { featuredQuestion };

export default api;
