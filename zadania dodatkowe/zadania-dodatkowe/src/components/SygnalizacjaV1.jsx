import { useState, useEffect } from "react";

export const SygnalizacjaV1 = () => {
  const kolory = ["red", "orange", "green"];
  const [color, setColor] = useState("red");
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interwal = setInterval(() => {
      setColor(kolory[index]);
      setIndex(index + 1);
      if (index === 2) {
        setIndex(0);
      }
    }, 3000);
    return () => clearInterval(interwal);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

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
    </div>
  );
};
