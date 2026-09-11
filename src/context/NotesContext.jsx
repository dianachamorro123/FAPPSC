import { createContext, useContext, useState } from "react";
import {
  createNoteRequest,
  getNotesRequest,
  deleteNoteRequest,
  getNoteRequest,
  updateNoteRequest,
} from "../api/notes";

const NotesContext = createContext();

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error("useNotes debe usarse dentro de NotesProvider");
  return context;
};

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    try {
      const res = await getNotesRequest();
      setNotes(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error(error);
      setNotes([]);
    }
  };

  const createNote = async (note) => {
    try {
      const res = await createNoteRequest(note);
      setNotes((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Error al crear nota:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const res = await deleteNoteRequest(id);
      if (res.status === 200 || res.status === 204) {
        setNotes((prev) => prev.filter((note) => note._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getNote = async (id) => {
    try {
      const res = await getNoteRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateNote = async (id, note) => {
    try {
      await updateNoteRequest(id, note);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        getNotes,
        createNote,
        deleteNote,
        getNote,
        updateNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
