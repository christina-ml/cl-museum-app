import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// COMPONENTS
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import Chatbot from "./ChatBot/Chatbot";
import Popchat from "./pages/Popchat";
import FourOFour from "./pages/FourOFour";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dinosaurs" element={<Index />} />
            <Route path="/dinosaurs/:id" element={<Show />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="*" element={<FourOFour/> } />
          </Routes>
        </main>
        <Popchat />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
