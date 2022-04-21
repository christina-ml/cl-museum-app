import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

// COMPONENTS
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";

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
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
