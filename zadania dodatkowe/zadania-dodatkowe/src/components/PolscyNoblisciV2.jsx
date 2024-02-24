import { nobelPrizeWinners } from "../assets/nobilsci";

export const PolscyNoblisciV2 = () => {
  const tylkoPolscyNoblisci = nobelPrizeWinners.filter(
    (dane) => dane.nationality === "Polish"
  );
  const wszyscyOproczPolakow = nobelPrizeWinners.filter(
    (dane) => dane.nationality !== "Polish"
  );
  return (
    <>
      <h1>Polscy Nobliści</h1>
      {tylkoPolscyNoblisci.map((noblista) => (
        <div className="noblista" key={noblista.name}>
          <h3>{noblista.name}</h3>
          <p>Nationality: {noblista.nationality}</p>
          <p>Category: {noblista.category}</p>
          <p>Number of achievements: {noblista.achievements.length}</p>

          {noblista.achievements.map((aczivment, index) => (
            <ul key={index}>
              <li>{aczivment}</li>
            </ul>
          ))}
        </div>
      ))}
      <h1>Nobliści</h1>
      {wszyscyOproczPolakow.map((noblista) => (
        <div className="noblista" key={noblista.name}>
          <h3>{noblista.name}</h3>
          <p>Nationality: {noblista.nationality}</p>
          <p>Category: {noblista.category}</p>
          <p>Number of achievements: {noblista.achievements.length}</p>

          {noblista.achievements.map((aczivment, index) => (
            <ul key={index}>
              <li>{aczivment}</li>
            </ul>
          ))}
        </div>
      ))}
    </>
  );
};
