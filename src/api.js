import axios from "axios";

export const api = async (chat) => {
  try {
    const response = await axios.post(
      "https://chatgtpcloneserver.vercel.app/",
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
