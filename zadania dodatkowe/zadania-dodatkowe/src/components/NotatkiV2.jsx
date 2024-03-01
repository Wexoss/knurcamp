import { useState } from "react";

function createIdCounter() {
  let id = 0;
  return function () {
    return id++;
  };
}

// funkcja pomocnicza do generowania id, normalnie byśmy dostawali unikatowe id np. z bazy danych
const getId = createIdCounter();

const initialState = [
  {
    sectionName: "Praca",
    sectionId: getId(),
    notes: [
      { text: "nowy raport", id: getId() },
      { text: "spotkanie z klientem o 17", id: getId() },
    ],
  },

  {
    sectionName: "Studia",
    sectionId: getId(),
    notes: [
      { text: "kolos z matmy, środa", id: getId() },
      { text: "impreza, sobota", id: getId() },
    ],
  },

  {
    sectionName: "Zakupy",
    sectionId: getId(),
    notes: [],
  },
];

export const NotatkiV2 = () => {
  const [data, setData] = useState(initialState);
  const [activeIndex, setActiveIndex] = useState(0);

  let actualSection = data[activeIndex].sectionName;

  const sections = data.map((section, currentIndex) => {
    return (
      <button
        key={section.sectionId}
        style={{
          backgroundColor: currentIndex === activeIndex ? "blue" : "white",
        }}
        onClick={() => setActiveIndex(currentIndex)}
      >
        {section.sectionName}
      </button>
    );
  });

  const notes = data[activeIndex].notes.map((note) => {
    return (
      <ul key={note.id}>
        <li>{note.text}</li>
      </ul>
    );
  });

  const addNewNote = (anotherNote) => {
    if (anotherNote.trim() === "") {
      alert("Nie można dodać pustego pola.");
      return;
    }

    if(data[activeIndex].notes.find(note => note.text === anotherNote)) {
      alert("Już to dodałeś");
      return
    }

    const newNote = { text: anotherNote, id: getId() };
    const updateSection = data.map((section) => {
      if (section.sectionName === actualSection) {
        return {
          ...section,
          notes: [...section.notes, newNote],
        };
      }
      return section;
    });
    setData(updateSection);
  };

  return (
    <div className="notatki">
      <div className="lewaStrona">{sections}</div>

      <div className="prawaStrona">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const newItem = formData.get(actualSection);
            addNewNote(newItem);
            form.reset();
          }}
        >
          <input type="text" name={actualSection} />
          <button type="submit" className="sejv">
            Save
          </button>
        </form>
        {notes}
      </div>
    </div>
  );
};
