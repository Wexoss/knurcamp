import { useState } from "react";

export const SygnalizacjaV2 = () => {
  const kolory = ["red", "orange", "green"];
  const [aktywnyIndex, setAktywnyIndex] = useState(0);

  const zamiana = () => {
    const ostatniIndex = kolory.length - 1
    setAktywnyIndex(aktywnyIndex === ostatniIndex ? 0 : aktywnyIndex + 1);
  };

  return (
    <div>
      <p
        className="czerwone"
        style={{ backgroundColor: kolory[aktywnyIndex] === "red" ? "red" : "white" }}
      ></p>
      <p
        className="pomaranczowe"
        style={{ backgroundColor: kolory[aktywnyIndex] === "orange" ? "orange" : "white" }}
      ></p>
      <p
        className="zielone"
        style={{ backgroundColor: kolory[aktywnyIndex] === "green" ? "green" : "white" }}
      ></p>
      <button onClick={zamiana}>Zmien Sygnał</button>
    </div>
  );
};
