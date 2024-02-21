import { books } from "../assets/ksiazki";
import { useState } from "react";

export const ListaKsiazekV1 = () => {
  const [ksiazka, setKsiazka] = useState("");
  return (
    <>
      <input
        type="text"
        onChange={(e) => setKsiazka(new RegExp(e.target.value, "gi"))}
      />
      {books.map((book, index) =>
        ksiazka === "" ? (
          <div key={index}>
            <p>{book}</p>
          </div>
        ) : book.match(ksiazka) ? (
          <div key={index}>
            <p>{book}</p>
          </div>
        ) : (
          null
        )
      )}
    </>
  );
};
