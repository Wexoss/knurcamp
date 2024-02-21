import { useState } from "react";

export const SygnalizacjaV3 = () => {
  const kolory = ["red", "orange", "green"];
  const [colors, setColors] = useState(["red", "red", "red", "red", "red"]);

  const zamiana = (index) => {
    const newColors = [...colors];
    newColors[index] = kolory[(kolory.indexOf(newColors[index]) + 1) % kolory.length];
    setColors(newColors);

  };

  return (
    <div className="zadanie3">
      {colors.map((color,index) => 
      <div className="zadanie3-div" key={index}>
        <p
        className="czerwone"
        style={{ backgroundColor: color === "red" ? "red" : "white" }}
      ></p>
      <p
        className="pomaranczowe"
        style={{ backgroundColor: color === "orange" ? "orange" : "white" }}
      ></p>
      <p
        className="zielone"
        style={{ backgroundColor: color === "green" ? "green" : "white" }}
      ></p>
      <button onClick={() =>zamiana(index)}>Zmien Sygnał</button>
      </div>)}
    </div>
  );
};
