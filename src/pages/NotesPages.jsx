import { useEffect } from "react";
import { useNotes } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";
import { Link } from "react-router-dom";

function NotesPage() {
  const { getNotes, notes } = useNotes();

  useEffect(() => {
    getNotes();
  }, []);

  // Vista cuando el usuario no tiene notas registradas
  if (notes.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[calc(100vh-140px)] text-center px-4">
        <div className="bg-zinc-900/60 border border-zinc-800 p-8 sm:p-10 rounded-3xl max-w-md w-full shadow-2xl backdrop-blur-md">
          {/* Icono vectorial nativo */}
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4 text-cyan-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-white mb-2">No tienes notas creadas</h1>
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            Comienza a organizar tus tareas agregando tu primera nota en el sistema.
          </p>

          <Link
            to="/add-note"
            className="bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/20 transition-all inline-flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
            </svg>
            Crear primera nota
          </Link>
        </div>
      </div>
    );
  }

  // Vista en cuadrícula cuando existen notas
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Mis Notas</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Tienes <span className="text-cyan-400 font-semibold">{notes.length}</span> {notes.length === 1 ? "nota guardada" : "notas guardadas"}
          </p>
        </div>

        <Link
          to="/add-note"
          className="bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-cyan-500/10 flex items-center gap-2 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
          </svg>
          <span>Nueva Nota</span>
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <NoteCard note={note} key={note._id} />
        ))}
      </div>
    </div>
  );
}

export default NotesPage;
