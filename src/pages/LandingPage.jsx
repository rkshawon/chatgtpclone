import { useNavigate } from "react-router-dom"; // Import useNavigate
import Bubbles from "../components/Bubbles";
import "../index.css";

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleExploreClick = () => {
    // Navigate to the /home route
    navigate("/home");
  };

  return (
    <div className="container relative min-h-screen">
      <h1 className="text-[50px] font-bold mt-5">AiGI</h1>
      <Bubbles />

      <div className="flex items-center justify-center h-full absolute top-0 left-0 w-full z-30">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            Welcome to AiGI World
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Experience the magic of Artificial Intelligence with our innovative
            solutions.
          </p>
          <button
            className="px-6 py-3 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:opacity-80 hover:shadow-xl transition"
            onClick={handleExploreClick} // Call the onClick handler
          >
            Let's Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
