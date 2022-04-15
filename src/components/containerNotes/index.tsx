import "./styles.css";
import { MdEventNote } from "react-icons/md";
import { AiOutlineFilter } from "react-icons/ai";
import Note from "../note";
import { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/client";
import { noteInterface } from "../../helpers/const/interfaces";

export default function ContainerNotes() {
  const [notes, setNotes] = useState<noteInterface[]>([]);

  useEffect(() => {
    const getNotes = async () => {
      const q = query(collection(db, "notes"));
      const querySnapshot = await getDocs(q);
      
      const notes = querySnapshot.docs.map((doc) => ({
        create_time: doc.data().create_time,
        id: doc.id,
        description: doc.data().description,
        title: doc.data().title,
        priority: doc.data().priority,
      }));

      return notes;
    };

    getNotes().then((resp) => resp && setNotes([...resp]));
  }, []);

  return (
    <div className="px-3.5 bg-slate-800 container-notes overflow-auto">
      <div className="mt-3.5 font-bold text-white flex items-center text-xl border-b-2">
        <h2>Notas</h2>
        <MdEventNote className="ml-2" />
      </div>
      <div className="my-3.5 flex justify-between text-white border-b border-slate-600 py-1">
        <p className="notes-results">{notes && `${notes.length} notas encontradas`}</p>
        <div>
          <button>
            <AiOutlineFilter />
          </button>
        </div>
      </div>
      <div>
        {notes ? (
          notes.map((note: noteInterface) => (
            <Note
              id={note.id}
              title={note.title}
              description={note.description}
              create_time={note.create_time}
              priority={note.priority}
              key={note.id}
            />
          ))
        ) : (
          <h1>Cargando</h1>
        )}
      </div>
    </div>
  );
}
