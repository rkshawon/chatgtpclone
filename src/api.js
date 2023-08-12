import { Configuration, OpenAIApi } from "openai";

const api = async (input) => {
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    messages: input,
    max_tokens: 100,
    temperature: 0,
  });

  return response.data.choices[0].text.replace(/\n/g, "");
};

const featuredQuestion = [
  "What is Java?",
  "What is JavaScript's purpose?",
  "Explain machine learning.",
  "Benefits of cloud computing?",
  "What is Object-oriented programming?",
];

export { featuredQuestion };

export default api;
