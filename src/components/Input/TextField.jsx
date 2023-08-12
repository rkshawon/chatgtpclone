import { useEffect, useRef, useState } from "react";

const TextField = ({ getTextInput, transcript }) => {
  const textareaRef = useRef(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(transcript);
  }, [transcript]);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value.length != 0) getTextInput(event.target.value);
    else getTextInput("Got Questions? Ask Away!");
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "300px";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <textarea
      ref={textareaRef}
      className="text-black resize-none h-[300px] max-h-[500px] overflow-y-auto border px-2 py-1 rounded min-w-[160px] w-full"
      value={value}
      onChange={handleChange}
      placeholder="Ask here..."
    />
  );
};

export default TextField;
