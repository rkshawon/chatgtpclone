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

export { SendButton };
