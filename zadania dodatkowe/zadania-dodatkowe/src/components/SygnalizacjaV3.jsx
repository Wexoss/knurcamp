import { useState, useEffect } from "react";

export const SygnalizacjaV3 = () => {
  const kolory = ["red", "orange", "green"];
  const [aktywnyIndex, setAktywnyIndex] = useState(0);
  const [startStop, setStartStop] = useState("stop");

  useEffect(() => {
    if (startStop === "stop") {
      return;
    }
    const ostatniIndex = kolory.length - 1;
    const interwal = setInterval(() => {
      setAktywnyIndex(aktywnyIndex === ostatniIndex ? 0 : aktywnyIndex + 1);
    }, 1000);
    return () => clearInterval(interwal);
  });

  return (
    <div>
      <p
        className="czerwone"
        style={{
          backgroundColor: kolory[aktywnyIndex] === "red" ? "red" : "white",
        }}
      ></p>
      <p
        className="pomaranczowe"
        style={{
          backgroundColor:
            kolory[aktywnyIndex] === "orange" ? "orange" : "white",
        }}
      ></p>
      <p
        className="zielone"
        style={{
          backgroundColor: kolory[aktywnyIndex] === "green" ? "green" : "white",
        }}
      ></p>
      <button
        onClick={() =>
          startStop === "stop" ? setStartStop("start") : setStartStop("stop")
        }
        style={{ backgroundColor: startStop === "stop" ? "green" : "red" }}
      >
        {startStop === "stop" ? "Start" : "Stop"}
      </button>
    </div>
  );
};
