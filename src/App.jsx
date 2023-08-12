import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Dictaphone from "./pages/Tesst";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Dictaphone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
