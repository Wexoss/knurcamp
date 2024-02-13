const elGodzinka = document.getElementById("godzinka");
const elKnur = document.getElementById("knur");
const elIle = document.getElementById("ile");
const elwiazemy = document.getElementById("wiazemy");
let godzinaZPalucha = null;

const ktoraGodzina = async () => {
  let godzina;
  if (godzinaZPalucha) {
    godzina = godzinaZPalucha;
  } else {
    const odpowiedz = await fetch(
      "https://worldtimeapi.org/api/timezone/America/Ciudad_Juarez"
    );
    const czas = await odpowiedz.json();
    godzina = czas.datetime.slice(11, 16);
  }
  elGodzinka.innerHTML = godzina;
  gramyBarke(godzina);
  coRobiKnur(godzina);
};

addEventListener("DOMContentLoaded", ktoraGodzina);

let interval = setInterval(ktoraGodzina, 60000);

const gramyBarke = (godzina) => {
  const godziny = godzina.slice(0, 2);
  const minuty = godzina.slice(3);

  if (godziny == 21 && minuty == 37) {
    const barka = document.createElement("audio");
    barka.controls = "controls";
    barka.src = "./knuryibarka/Barka.mp3";
    barka.id = "barka";
    document.body.appendChild(barka);
    barka.play();
  }
};

const coRobiKnur = (godzina) => {
  const godziny = Number(godzina.slice(0, 2));
  const minuty = Number(godzina.slice(3));

  if (godziny > 2 && godziny < 11) {
    elKnur.src = "./knuryibarka/spioszek.png";
  } else if (godziny === 21 && minuty === 37) {
    elKnur.src = "./knuryibarka/kremuwka.png";
  } else {
    elKnur.src = "./knuryibarka/grawkonkuter.png";
  }
};

const pentlujemy = () => {
  let ile = Number(elIle.value);

  if (isNaN(ile) || ile < 1) {
    alert("Podaj LICZBĘ większą od 0 albo nie wiążę");
  } else if (ile > 10) {
    alert("Nie no tyle to nie, palce mnie bolom(10 maks)");
  } else {
    const miejsceNaPetle = document.createElement("div");
    for (let i = 0; i < ile; i++) {
      const may = document.createElement("img");
      may.src = "./knuryibarka/may.png";
      miejsceNaPetle.appendChild(may);
    }
    document.body.append(miejsceNaPetle);
  }
};

const nieBedeCzekal = () => {
  const ustawGodzine = prompt(
    "Podaj nową godzinę (format: HH:MM):\n Zmiany nastąpią w godzinach porannych/wieczornych/specjalnych*"
  );
  if (ustawGodzine) {
    godzinaZPalucha = ustawGodzine;
    clearInterval(interval);
    ktoraGodzina();
  }
  const ElBarka = document.getElementById("barka");

  if (ElBarka !== null && godzinaZPalucha !== "21:37") {
    ElBarka.parentNode.removeChild(ElBarka);
  }
};
