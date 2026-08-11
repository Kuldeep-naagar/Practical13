import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <h1>Background Color Changer</h1>

      <p>Select a color:</p>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <p>Selected Color: {color}</p>
    </div>
  );
}

export default App;