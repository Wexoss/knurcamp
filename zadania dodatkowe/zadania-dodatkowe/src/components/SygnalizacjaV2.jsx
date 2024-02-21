import { useState } from "react";

export const SygnalizacjaV2 = () => {
  const kolory = ["red", "orange", "green"];
  const [color, setColor] = useState("red");
  const [index, setIndex] = useState(1);

  const zamiana = () => {
    setColor(kolory[index]);
    setIndex(index + 1);
    if (index === 2) {
      setIndex(0);
    }
  };

  return (
    <div>
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
      <button onClick={zamiana}>Zmien Sygnał</button>
    </div>
  );
};
