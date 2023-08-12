// import { Configuration, OpenAIApi } from "openai";

//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

// const api = async (input) => {
//   const configuration = new Configuration({
//     apiKey: "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",
//   });

//   const openai = new OpenAIApi(configuration);
//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     messages: input,
//     max_tokens: 100,
//     temperature: 0,
//   });

//   return response.data.choices[0].text.replace(/\n/g, "");
// };
import axios from "axios";

export const api = async (chat) => {
  try {
    // after deployment, you should change the URL below
    const response = await axios.post(
      "http://localhost:8000",
      {
        message: chat,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
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
