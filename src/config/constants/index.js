export const NOTES = [
  {
    id: 1,
    title: "First note",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at iaculis nibh. Aliquam erat volutpat. Phasellus lacinia cursus fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vestibulum enim id justo volutpat, et bibendum augue scelerisque. Sed vestibulum elementum molestie. Mauris eu nisi vitae nibh vulputate sagittis. Quisque et cursus tortor, quis porta ante. Maecenas posuere, lacus ornare consequat elementum, sem turpis ornare justo, eget aliquam ante dolor non quam. Curabitur congue tempor massa eget lacinia. Quisque malesuada nibh nec ipsum consectetur scelerisque. Sed venenatis metus a magna vulputate tincidunt. Integer lacus est, pellentesque sit amet tincidunt at, mattis non libero. Pellentesque euismod quam vitae eros rhoncus, eget luctus augue tempus. Sed id porttitor mauris.",
    date: new Date().toDateString(),
  },
  {
    id: 2,
    title: "Second note",
    description:
      "Duis elementum eu libero at fermentum. Aliquam eget diam sollicitudin, mattis eros sed, eleifend ipsum. Nulla dictum erat non nulla congue pellentesque. Nulla et lorem vel urna scelerisque tempor non ultrices leo. Duis elementum ex dictum tellus porttitor, sit amet pharetra risus viverra. Etiam sed quam urna. Vivamus at rutrum lorem, vitae sagittis dui. Donec quis ligula vulputate, euismod mi quis, consequat nibh. Proin scelerisque sapien vitae lorem sodales cursus. Aliquam tristique faucibus odio, vel suscipit nulla dictum sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sodales posuere accumsan. Vestibulum vitae rhoncus quam. In hac habitasse platea dictumst. Proin lectus lectus, sodales eget eros a, consequat blandit risus. Nam at neque risus.",
    date: new Date().toDateString(),
  },
  {
    id: 3,
    title: "Third note",
    description:
      "Mauris consequat accumsan dictum. Praesent nisi urna, gravida in efficitur id, ultricies id lectus. Integer varius nibh massa, in pretium nisi malesuada facilisis. Nullam eu mauris orci. Ut dapibus, arcu a scelerisque fermentum, diam diam cursus dui, id pharetra arcu purus sit amet sem. Nulla elementum est non leo dapibus iaculis. Integer malesuada tincidunt magna, vel elementum diam laoreet eu. Duis in congue nulla, vel blandit massa. Aenean tempus sapien sollicitudin elit vulputate interdum. Suspendisse et bibendum dolor. Nunc non est sit amet sem euismod blandit sit amet nec ligula.",
    date: new Date().toDateString(),
  },
  {
    id: 4,
    title: "Fourth note",
    description:
      "Morbi auctor at orci at venenatis. Vestibulum commodo auctor massa, nec luctus ex rhoncus et. Aenean fringilla, justo nec hendrerit malesuada, tortor lorem pulvinar lectus, sed tristique risus libero non urna. Pellentesque interdum, libero quis convallis egestas, turpis nibh sagittis ex, elementum porta nisl nulla at metus. Sed tristique molestie eros, id scelerisque sem ultricies id. Curabitur elit quam, interdum blandit fringilla a, malesuada vitae ligula. Nunc id convallis tellus. Morbi ligula justo, elementum nec ornare id, auctor sit amet diam. Sed faucibus, tortor quis vulputate vulputate, libero velit iaculis urna, vel consequat lorem augue eget justo.",
    date: new Date().toDateString(),
  },
  {
    id: 5,
    title: "Fifth note",
    description:
      "Integer in venenatis sem. Cras varius ligula lacinia libero volutpat fermentum. Vestibulum eget aliquam massa. In ultricies neque urna, id feugiat sapien convallis vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam faucibus ex non accumsan sollicitudin. Donec a viverra massa. Duis pulvinar ultrices fringilla. Etiam eros sapien, vehicula non semper nec, tempus quis elit. Curabitur lobortis mollis sapien a pulvinar. Sed maximus at ligula ut molestie. Duis consectetur auctor tristique.",
    date: new Date().toDateString(),
  },
];

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
};

export const INITIAL_VALUES = {
  email: "",
  firstName: "",
  lastName: "",
  birthday: "",
  password: "",
  confirmPassword: "",
};
