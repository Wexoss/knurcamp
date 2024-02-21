import { nobelPrizeWinners } from "../assets/nobilsci";

export const PolscyNoblisciV2 = () => {
  return (
    <>
      <h1>Polscy Nobliści</h1>
      {nobelPrizeWinners.map(
        (noblista, index) =>
          noblista.nationality === "Polish" && (
            <div className="noblista" key={index}>
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
          )
      )}
      <h1>Nobliści</h1>
      {nobelPrizeWinners.map(
        (noblista, index) =>
          noblista.nationality != "Polish" && (
            <div className="noblista" key={index}>
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
          )
      )}
    </>
  );
};
