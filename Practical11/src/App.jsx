import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="topbar">
          <div className="brand">
            <div className="brand-logo">R</div>

            <div>
              <h2>ReactSpace</h2>
              <span>Navigation Demo</span>
            </div>
          </div>

          <div className="live-badge">
            <span className="status-dot"></span>
            SYSTEM ONLINE
          </div>
        </header>

        <main className="main-container">
          <div className="heading">
            <p className="eyebrow">PRACTICAL 11</p>
            <h1>React Router Navigation</h1>
            <p className="subtitle">
              Navigate between pages without refreshing the application.
            </p>
          </div>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <footer>
            <span>REACTSPACE</span>
            <span>Built with React Router DOM</span>
          </footer>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;