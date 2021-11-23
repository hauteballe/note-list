export const VIEW_TYPE = {
  DISPLAY: "display",
  CREATE: "create",
  EDIT: "edit",
};

export const ROUTES = {
  baseName: "/note-list",
  myNotes: "/notes",
  sharedNotes: "/shared-notes",
  about: "/about",
  notFound: "/not-found",
  signIn: "/sign-in",
  signUp: "/sign-up",
  authRoute: "/api/users/auth",
  usersRoute: "/api/users",
  notesRoute: "/api/notes",
  sharedNotesRoute: "/api/notes/share",
};

export const INITIAL_VALUES = {
  email: "",
  firstName: "",
  lastName: "",
  birthday: "",
  password: "",
  confirmPassword: "",
};
