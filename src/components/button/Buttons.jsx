const IconButton = ({ icon }) => {
  return (
    <button className="bg-purple-900 h-[40px] font-semibold sm:py-2 sm:px-4 py-1 px-3 rounded-r flex items-center justify-center ">
      {icon}
    </button>
  );
};
const SendButton = ({ icon, label, sendMessage, disable }) => {
  return (
    <button
      disabled={disable}
      onClick={sendMessage}
      className={`bg-purple-800 w-full hover:bg-purple-600 font-semibold py-2 px-4 flex items-center justify-center   transition-colors duration-300 border-none focus:outline-none shadow-md ${
        disable ? "cursor-wait" : "cursor-pointer"
      } rounded-l bg-p`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}s
    </button>
  );
};

export { IconButton, SendButton };
