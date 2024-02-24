import { useState, useEffect } from "react";

export const SygnalizacjaV1 = () => {
  const kolory = ["red", "orange", "green"];
  const [aktywnyIndex, setAktywnyIndex] = useState(0)

  useEffect(() => {
    const ostatniIndex = kolory.length - 1
    const interwal = setInterval(() => {
      setAktywnyIndex(aktywnyIndex === ostatniIndex ? 0 : aktywnyIndex + 1);
    }, 3000);
    return () => clearInterval(interwal)
  })

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
    </div>
  );
};
