import { nobelPrizeWinners } from "../assets/nobilsci"

export const PolscyNoblisciV1 = () => {
  
  return (
    <>
      {nobelPrizeWinners.map((noblista,index) => 
      (noblista.nationality === "Polish" &&
      <div className="noblista" key={index}>
        <h3>{noblista.name}</h3>
        <p>Nationality: {noblista.nationality}</p>
        <p>Category: {noblista.category}</p>
        <p>Number of achievements: {noblista.achievements.length}</p>
      </div>
      ))}
    </>
  );
};
