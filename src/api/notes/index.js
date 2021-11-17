import { apiClient } from "api/base";
import { ROUTES } from "config/constants";

const addNote = async ({ data }) => {
  const result = {
    ok: true,
  };
  try {
    const response = await apiClient.post(ROUTES.notesRoute, data);
    result.data = response.data;
  } catch (error) {
    result.ok = false;
    result.error = error.response.data;
  }
  return result;
};

const getNotesList = async ({ page = 1, ...params }) => {
  const result = {
    ok: true,
  };
  try {
    const response = await apiClient.get(ROUTES.notesRoute, {
      params: { page: page, ...params },
    });
    result.data = response.data;
  } catch (error) {
    result.ok = false;
    result.error = error.response.data;
  }
  return result;
};

const updateNote = async (data) => {
  const result = {
    ok: true,
  };
  try {
    const uri = `${ROUTES.notesRoute}/${data.id}`;
    await apiClient.put(uri, data);
  } catch (error) {
    result.ok = false;
    result.error = error.response.data;
  }
  return result;
};

const deleteNote = async ({ id }) => {
  const result = {
    ok: true,
  };
  try {
    const uri = `${ROUTES.notesRoute}/${id}`;
    console.log(uri, "uri");
    await apiClient.delete(uri);
  } catch (error) {
    result.ok = false;
    result.error = error.response.data;
  }
  return result;
};

const getSharedNotesList = async ({ page = 1 }) => {
  const result = {
    ok: true,
  };
  try {
    const response = await apiClient.get(ROUTES.sharedNotesRoute, {
      params: { page: page },
    });
    result.data = response.data;
  } catch (error) {
    result.ok = false;
    result.error = error.response.data;
  }
  return result;
};

const shareNote = async (id, data) => {
  const result = {
    ok: true,
  };
  try {
    const uri = `${ROUTES.sharedNotesRoute}/${id}`;
    await apiClient.put(uri, data);
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
  deleteNote,
  getSharedNotesList,
  shareNote,
};
export default notesApi;
