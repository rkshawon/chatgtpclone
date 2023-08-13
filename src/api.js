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
  "JavaScript's purpose?",
  "How does the brain process emotions?",
  "What are derivatives in finance and how are they used?",
  "Explain quantum computer",
];

export { featuredQuestion };

export default api;
