const notes = {};

notes.getNotes = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve("get notes");
  });
};

notes.getNote = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve("get note");
  });
};

notes.createNote = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve("create note");
  });
};

notes.updateNote = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve("update note");
  });
};

notes.deleteNote = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve("delete note");
  });
};

module.exports = notes;
