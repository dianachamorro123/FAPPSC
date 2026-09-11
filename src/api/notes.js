import axios from "./axios.js";

export const getNotesRequest = () => axios.get("/getNotes");
export const getNoteRequest = (id) => axios.get(`/getNote/${id}`);
export const createNoteRequest = (note) => axios.post("/getNote", note);
export const updateNoteRequest = (id, note) =>
  axios.put(`/getNote/${id}`, note);
export const deleteNoteRequest = (id) => axios.delete(`/getNote/${id}`);
//commit
