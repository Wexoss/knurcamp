import { useEffect, useState } from "react";

export const PogodaV1 = () => {
  const [latitude, setLatitude] = useState(52.52);
  const [longitude, setLongitude] = useState(13.41);
  const [temperatura, setTemperatura] = useState("0");
  const [predkoscWiatru, setPredkoscWiatru] = useState(null);
  const [godzina, setGodzina] = useState(null);
  const [updateLat, setUpdateLat] = useState(null);
  const [updateLong, setUpdateLong] = useState(null);
  const [czekamy, setCzekamy] = useState(true)

  const danePogodowe = async (lat, long) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );
    const dane = await response.json();
    const aktualnaTemperatura =
      dane.current.temperature_2m + dane.current_units.temperature_2m;
    const aktualnaPredkoscWiatru =
      dane.current.wind_speed_10m + dane.current_units.wind_speed_10m;
    const aktualnaGodzina = dane.current.time.split("T")[1];

    setTemperatura(aktualnaTemperatura);
    setPredkoscWiatru(aktualnaPredkoscWiatru);
    setGodzina(aktualnaGodzina);
    czekamyTrzySekundy()
    czyPizga(dane.current.temperature_2m);
  };

  useEffect(() => {
    const interwal = setInterval(() => {
      danePogodowe(latitude, longitude);
    }, 60000);

    danePogodowe(latitude, longitude);
    return () => clearInterval(interwal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  const podmianka = () => {
    setLatitude(updateLat);
    setLongitude(updateLong);
  };

  const czyPizga = (temp) => {
    setTimeout(() => {
      if (temp <= -10) {
        alert("ale pizga");
      }
    }, 3250);
  };

  const czekamyTrzySekundy = () => {
    setTimeout(() => {
      setCzekamy(false)
    }, 3000);
    setCzekamy(true)
  };

  return czekamy ? (
    <p>LOADING DATA....</p>
  ) : (
    <div
      style={{
        backgroundColor:
          temperatura[0] === "-"
            ? Number(temperatura.slice(0, 3)) <= -10
              ? "blue"
              : "#DBF1FD"
            : Number(temperatura.slice(0, 2)) >= 10
            ? "red"
            : "pink",
      }}
    >
      <p>Witam, gdzie sprawdzamy pogode?</p>
      <p>Latitude</p>
      <input
        type="text"
        placeholder={String(latitude)}
        onChange={(e) => setUpdateLat(e.target.value)}
      />
      <p>Longitude</p>
      <input
        type="text"
        id="long"
        placeholder={String(longitude)}
        onChange={(e) => setUpdateLong(e.target.value)}
      />
      <button onClick={podmianka}>Sprawdzam</button>
      <div>
        <p>Temperatura: {temperatura}</p>
        <p>Prędkość wiatru: {predkoscWiatru}</p>
        <p>Godzina: {godzina}</p>
      </div>
    </div>
  );
};
