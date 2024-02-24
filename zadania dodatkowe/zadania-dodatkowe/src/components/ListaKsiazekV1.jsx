import { books } from "../assets/ksiazki";
import { useState } from "react";

export const ListaKsiazekV1 = () => {
  const [ksiazka, setKsiazka] = useState("");
  const szukaneKsiazki = books.filter((book) => book.match(ksiazka));

  return (
    <>
      <input
        type="text"
        onChange={(e) => setKsiazka(new RegExp(e.target.value, "gi"))}
      />
      {ksiazka === ""
        ? books.map((book) => (
            <div key={book}>
              <p>{book}</p>
            </div>
          ))
        : szukaneKsiazki.map((book) => (
            <div key={book}>
              <p>{book}</p>
            </div>
          ))}
    </>
  );
};
