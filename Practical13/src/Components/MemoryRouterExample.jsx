import { MemoryRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to Home Page</h2>;
}

function About() {
  return <h2>Welcome to About Page</h2>;
}

function MemoryRouterExample() {
  return (
    <MemoryRouter>
      <div>
        <h1>MemoryRouter Example</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </MemoryRouter>
  );
}

export default MemoryRouterExample;