import { useEffect, useState } from "react";

export const PogodaV1 = () => {
  const [latitude, setLatitude] = useState(52.52);
  const [longitude, setLongitude] = useState(13.41);
  const [updateLat, setUpdateLat] = useState();
  const [updateLong, setUpdateLong] = useState();
  const [czekamy, setCzekamy] = useState(true)
  const [danePogodowe, setDanePogodowe] = useState()

  const pobierzDanePogodowe = async (lat, long) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );
    const dane = await response.json();
    setDanePogodowe(dane)
    czekamyTrzySekundy()
  };

  useEffect(() => {
    const interwal = setInterval(() => {
      pobierzDanePogodowe(latitude, longitude);
    }, 60000);

    pobierzDanePogodowe(latitude, longitude);
    return () => clearInterval(interwal);
  }, [latitude, longitude]);

  const podmianka = () => {
    setLatitude(updateLat);
    setLongitude(updateLong);
  };

  useEffect(() => {
    if (danePogodowe?.current?.temperature_2m === undefined || danePogodowe?.current?.temperature_2m > -10) return;
    alert('ale pizga');
  }, [danePogodowe]);

  const czekamyTrzySekundy = () => {
    setTimeout(() => {
      setCzekamy(false)
    }, 3000);
    setCzekamy(true)
  };

  if (czekamy) {
    return <p>LOADING DATA...</p>
  }

  return(
    <div
      style={{
        backgroundColor:
        danePogodowe?.current?.temperature_2m < 0
            ? danePogodowe?.current?.temperature_2m <= -10
              ? "blue"
              : "#DBF1FD"
            : danePogodowe?.current?.temperature_2m >= 10
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
        <p>Temperatura: {danePogodowe?.current?.temperature_2m + danePogodowe?.current_units?.temperature_2m}</p>
        <p>Prędkość wiatru: {danePogodowe?.current?.wind_speed_10m + danePogodowe?.current_units?.wind_speed_10m}</p>
        <p>Godzina: {danePogodowe?.current?.time.split("T")[1]}</p>
      </div>
    </div>
  );
};
