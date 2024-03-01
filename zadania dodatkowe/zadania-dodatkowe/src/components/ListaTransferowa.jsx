import { useState } from "react";

function createIdCounter() {
  let id = 0;
  return function () {
    return id++;
  };
}

// funkcja pomocnicza do generowania id, normalnie byśmy dostawali unikatowe id np. z bazy danych
const getId = createIdCounter();

const data = [
  { item: "Item 0", checked: "no", id: getId() },
  { item: "Item 1", checked: "no", id: getId() },
  { item: "Item 2", checked: "no", id: getId() },
  { item: "Item 3", checked: "no", id: getId() },
  { item: "Item 4", checked: "no", id: getId() },
  { item: "Item 5", checked: "no", id: getId() },
  { item: "Item 6", checked: "no", id: getId() },
  { item: "Item 7", checked: "no", id: getId() },
  { item: "Item 8", checked: "no", id: getId() },
  { item: "Item 9", checked: "no", id: getId() },
  
];

export const ListaV1 = () => {
  const [listA, setListA] = useState(data);
  const [listB, setListB] = useState([]);

  const isChecked = (check, item) => {
    if (check.target.checked) {
      item.checked = "yes";
    } else {
      item.checked = "no";
    }
  };

  const moveToLeft = () => {
    const transferToA = listB.filter((item) => item.checked === "yes").map((item) => ({ ...item, checked: "no" }));
    const updatedListB = listB.filter((item) => item.checked === "no");

    setListA((listA) => [...listA, ...transferToA].sort((a,b) => a.id - b.id));
    setListB(updatedListB);
  };

  const moveToRight = () => {
    const transferToB = listA.filter((item) => item.checked === "yes").map((item) => ({ ...item, checked: "no" }));
    const updatedListA = listA.filter((item) => item.checked === "no");

    setListB((listB) => [...listB, ...transferToB].sort((a,b) => a.id - b.id));
    setListA(updatedListA);
  };

  return (
    <div className="listyDwie">
      <div className="listaA">
        <h3>Lista A</h3>
        {listA.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                <input
                  type="checkbox"
                  onChange={(check) => isChecked(check, item)}
                />
                {item.item}
              </li>
            </ul>
          );
        })}
      </div>

      <button className="lewo" onClick={moveToLeft}>
        LEWO
      </button>
      <button className="prawo" onClick={moveToRight}>
        PRAWO
      </button>

      <div className="listaB">
        <h3>Lista B</h3>
        {listB.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                <input
                  type="checkbox"
                  onChange={(check) => isChecked(check, item)}
                />
                {item.item}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
