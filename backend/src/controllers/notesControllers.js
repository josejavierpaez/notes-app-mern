const notes = {};

notes.getNotes = (req, res) => {
  res.json({ message: "get request" });
};

notes.getNote = (req, res) => {
  res.json({ message: "get request" });
};

notes.createNote = (req, res) => {
  res.json({ message: "create note" });
};

notes.updateNote = (req, res) => {
  res.json({ message: "update note" });
};

notes.deleteNote = (req, res) => {
  res.json({ message: "delete note" });
};

module.exports = notes;
