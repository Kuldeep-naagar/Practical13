import { useState } from "react";

function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("C");
  const [result, setResult] = useState("");

  const convertTemperature = () => {
    if (temperature === "") {
      setResult("Please enter a temperature");
      return;
    }

    const value = Number(temperature);

    if (unit === "C") {
      const fahrenheit = (value * 9) / 5 + 32;
      setResult(`${value}°C = ${fahrenheit.toFixed(2)}°F`);
    } else {
      const celsius = ((value - 32) * 5) / 9;
      setResult(`${value}°F = ${celsius.toFixed(2)}°C`);
    }
  };

  return (
    <div>
      <h1>Temperature Converter</h1>

      <input
        type="number"
        placeholder="Enter temperature"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />

      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      >
        <option value="C">Celsius to Fahrenheit</option>
        <option value="F">Fahrenheit to Celsius</option>
      </select>

      <button onClick={convertTemperature}>
        Convert
      </button>

      <h2>{result}</h2>
    </div>
  );
}

export default TemperatureConverter;