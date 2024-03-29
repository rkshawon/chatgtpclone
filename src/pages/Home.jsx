import "regenerator-runtime/runtime";
import { useState } from "react";
import TextField from "../components/Input/TextField";
import { SendButton } from "../components/button/Buttons";
import { BsRobot, BsSoundwave } from "react-icons/bs";
import api, { featuredQuestion } from "../api";
import { useSpeechSynthesis } from "react-speech-kit";
import "../index.css";

const Home = () => {
  const [question, setQuestion] = useState("Got Questions? Ask Away!");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const { speak } = useSpeechSynthesis();

  const sendMessage = async () => {
    try {
      setLoading(true);
      const response = await api(question);
      setAnswer(
        <>
          <strong>Answer: </strong> {response}
        </>
      );
      featuredQuestion.pop();
      featuredQuestion.unshift(question);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getTextInput = (val) => {
    setQuestion(val);
  };

  const audio = () => {
    !loading && answer
      ? speak({ text: question + " Answer " + answer?.props?.children[2] })
      : speak({
          text: "type your question in the input field and press send button to get your answer.",
        });
  };

  return (
    <div className="h-full w-full flex gap-10">
      <div className="h-full p-5 w-[30%] relative ">
        <h1 className="text-[50px] font-bold ml-4">AiGI</h1>
        <div className="mt-10 overflow-y-auto h-[220px]">
          <h3 className="font-bold">Recently Asked Questions-</h3>
          {featuredQuestion.map((item, index) => {
            return (
              <li key={index} className="mt-1 text-sx cursor-pointer">
                {item}
              </li>
            );
          })}
        </div>
        <div className="w-full absolute bottom-5 ">
          <TextField getTextInput={getTextInput} />
          <div className="flex items-center justify-end ">
            <SendButton
              label="Send"
              sendMessage={sendMessage}
              disable={loading}
            />

            <button
              onClick={audio}
              className="bg-purple-900 h-[40px] font-semibold sm:py-2 sm:px-4 py-1 px-3 rounded-r flex items-center justify-center "
            >
              <BsSoundwave className="text-xl " />
            </button>
            {/* )} */}
          </div>
        </div>
      </div>

      <div className="w-[70%] h-[100%]">
        <div className=" overflow-y-auto py-8 px-20 h-full bg-slate-700 ">
          <div className="flex items-center mb-5 bg-slate-500 rounded p-4">
            <span className="bg-white h-8 w-8 flex items-center justify-center rounded-full mr-3">
              <BsRobot className="text-xl text-green-800" />
            </span>

            <pre className="whitespace-pre-wrap  text-lg">
              <code>{question}</code>
            </pre>
          </div>
          {loading ? (
            <div className="loader mt-[300px] w-full "></div>
          ) : (
            <>
              {answer ? (
                <div className="border-l-4 border-purple-500 pl-4 text-lg bg-slate-800 rounded p-4">
                  <pre className="whitespace-pre-wrap">
                    <code>{answer}</code>
                  </pre>
                </div>
              ) : (
                <h1 className="text-[50px] text-center mt-[200px] opacity-20">
                  Ai Generated Information will appear here!
                </h1>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
