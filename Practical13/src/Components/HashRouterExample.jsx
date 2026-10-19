import { HashRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to Home Page</h2>;
}

function About() {
  return <h2>Welcome to About Page</h2>;
}

function Contact() {
  return <h2>Welcome to Contact Page</h2>;
}

function HashRouterExample() {
  return (
    <HashRouter>
      <div>
        <h1>HashRouter Example</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default HashRouterExample;