import { useNotes } from "../context/NotesContext";
import { Link } from "react-router-dom";

function NoteCard({ note }) {
  const { deleteNote } = useNotes();

  return (
    <div className="bg-zinc-800 border border-zinc-700 w-full p-6 rounded-2xl shadow-xl flex flex-col justify-between hover:border-zinc-600 transition">
      <div>
        <header className="flex justify-between items-start mb-3 gap-x-2">
          <h1 className="text-2xl font-bold text-white break-words">{note.title}</h1>
          <div className="flex gap-x-2 shrink-0">
            <button
              onClick={() => deleteNote(note._id)}
              className="bg-red-600/20 hover:bg-red-600 border border-red-500/50 text-red-300 hover:text-white text-xs px-3 py-1.5 rounded-lg transition"
            >
              Eliminar
            </button>
            <Link
              to={`/notes/${note._id}`}
              className="bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/50 text-indigo-300 hover:text-white text-xs px-3 py-1.5 rounded-lg transition"
            >
              Editar
            </Link>
          </div>
        </header>
        <p className="text-zinc-400 text-sm whitespace-pre-line leading-relaxed mb-4">
          {note.description}
        </p>
      </div>
      <footer className="text-xs text-zinc-500 pt-3 border-t border-zinc-700/50">
        {new Date(note.createdAt || Date.now()).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </footer>
    </div>
  );
}

export default NoteCard;
