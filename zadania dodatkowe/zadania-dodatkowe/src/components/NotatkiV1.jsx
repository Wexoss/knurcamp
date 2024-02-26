import { useState } from "react";

export const NotatkiV1 = () => {
  const [ktora, setKtora] = useState(1);
  const [zakupy, setZakupy] = useState([]);
  const [praca, setPraca] = useState([]);
  const [studia, setStudia] = useState([]);
  const [nowyPrzedmiot, setNowyPrzedmiot] = useState("");

  if (ktora === 1) {
    return (
      <div className="notatki">
        <div className="lewaStrona">
          <button
            onClick={() => setKtora(1)}
            style={{ backgroundColor: ktora === 1 ? "blue" : "white" }}
          >
            Lista Zakupów
          </button>
          <button onClick={() => setKtora(2)}>Praca</button>
          <button onClick={() => setKtora(3)}>Studia</button>
        </div>

        <div className="prawaStrona">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setZakupy([...zakupy, nowyPrzedmiot]);
              setNowyPrzedmiot("");
            }}
          >
            <input
              type="text"
              value={nowyPrzedmiot}
              onChange={(e) => setNowyPrzedmiot(e.target.value)}
            />
            <button type="submit" className="sejv">Save</button>
          </form>
          {zakupy.map((przedmiot) => (
            <ul key={przedmiot}>
              <li>{przedmiot}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }

  if (ktora === 2) {
    return (
      <div className="notatki">
        <div className="lewaStrona">
          <button onClick={() => setKtora(1)}>Lista Zakupów</button>
          <button
            onClick={() => setKtora(2)}
            style={{ backgroundColor: ktora === 2 ? "blue" : "white" }}
          >
            Praca
          </button>
          <button onClick={() => setKtora(3)}>Studia</button>
        </div>

        <div className="prawaStrona">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPraca([...praca, nowyPrzedmiot]);
              setNowyPrzedmiot("");
            }}
          >
            <input
              type="text"
              value={nowyPrzedmiot}
              onChange={(e) => setNowyPrzedmiot(e.target.value)}
            />
            <button type="submit" className="sejv">Save</button>
          </form>
          {praca.map((przedmiot) => (
            <ul key={przedmiot}>
              <li>{przedmiot}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }

  if (ktora === 3) {
    return (
      <div className="notatki">
        <div className="lewaStrona">
          <button onClick={() => setKtora(1)}>Lista Zakupów</button>
          <button onClick={() => setKtora(2)}>Praca</button>
          <button
            onClick={() => setKtora(3)}
            style={{ backgroundColor: ktora === 3 ? "blue" : "white" }}
          >
            Studia
          </button>
        </div>

        <div className="prawaStrona">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStudia([...studia, nowyPrzedmiot]);
              setNowyPrzedmiot("");
            }}
          >
            <input
              type="text"
              value={nowyPrzedmiot}
              onChange={(e) => setNowyPrzedmiot(e.target.value)}
            />
            <button type="submit" className="sejv">Save</button>
          </form>
          {studia.map((przedmiot) => (
            <ul key={przedmiot}>
              <li>{przedmiot}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
};
