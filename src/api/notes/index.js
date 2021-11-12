import { apiClient } from "api/base";
import { ROUTES } from "config/constants";

const addNote = async ({ data }) => {
  const result = {
    ok: true,
  };
  try {
    await apiClient.post(ROUTES.notesRoute, data);
  } catch (error) {
    result.ok = false;
    result.error = error.response.data;
  }
  return result;
};

const getNotesList = async () => {
  const result = {
    ok: true,
  };
  try {
    const response = await apiClient.get(ROUTES.notesRoute);
    result.data = response.data;
  } catch (error) {
    result.ok = false;
    result.error = error.response.data;
  }
  return result;
};

const updateNote = async ({ updatedNote }) => {
  const result = {
    ok: true,
  };
  try {
    await apiClient.put(ROUTES.notesRoute + `/${updatedNote.id}`, updatedNote);
  } catch (error) {
    result.ok = false;
    result.error = error.response.data;
  }
  return result;
};

const notesApi = {
  addNote,
  getNotesList,
  updateNote,
};
export default notesApi;
