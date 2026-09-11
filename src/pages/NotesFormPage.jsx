import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNotes } from "../context/NotesContext";
import { useNavigate, useParams } from "react-router-dom";

function NotesFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createNote, getNote, updateNote } = useNotes();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadNote() {
      if (params.id) {
        const note = await getNote(params.id);
        if (note) {
          setValue("title", note.title);
          setValue("description", note.description);
        }
      }
    }
    loadNote();
  }, [params.id]);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateNote(params.id, data);
    } else {
      await createNote(data);
    }
    navigate("/notes");
  });

  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)] px-4">
      <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-2xl w-full max-w-md shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          {params.id ? "Editar Nota" : "Crear Nueva Nota"}
        </h1>

        <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
          <div>
            <label className="text-zinc-300 text-sm font-medium mb-1 block">Título</label>
            <input
              type="text"
              placeholder="Ej. Comprar viveres"
              {...register("title", { required: true })}
              autoFocus
              className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          <div>
            <label className="text-zinc-300 text-sm font-medium mb-1 block">Descripción</label>
            <textarea
              rows="4"
              placeholder="Escribe el detalle de tu nota..."
              {...register("description", { required: true })}
              className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-lg shadow-md transition duration-200 mt-2"
          >
            {params.id ? "Actualizar Nota" : "Guardar Nota"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default NotesFormPage;