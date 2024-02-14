const spanko = async (milisekundy) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("Halo Świat po " + milisekundy + " milisekundach"));
    }, milisekundy);
  });
};

const malpiFetch = async (method, url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(console.log(xhr.responseText));
        } else {
          reject(console.error(xhr.statusText));
        }
      }
    };
    xhr.send();
  });
};

const trudneSieWylosowalo = async () => {
  await spanko(2222);
  console.log("Losu losu losu losu");
};

spanko(10);

malpiFetch(
  "GET",
  "https://worldtimeapi.org/api/timezone/America/Ciudad_Juarez"
);

trudneSieWylosowalo();
