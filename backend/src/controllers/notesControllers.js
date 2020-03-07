const notes = {};
const notesModel = require("../models/Note");

notes.getNotes = (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      const notes = notesModel.find();
      resolve(notes);
    } catch (error) {
      reject(`error: ${error}`);
    }
  });
};

notes.getNote = (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      const note = notesModel.findById(req.params.id);
      resolve(note);
    } catch (error) {
      reject(`error: ${error}`);
    }
  });
};

notes.createNote = (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      const { title, content, author } = req.body;
      const newNote = new notesModel({
        title: title,
        content: content,
        author: author
      });
      resolve(newNote.save());
    } catch (error) {
      reject(`error: ${error}`);
    }
  });
};

notes.updateNote = (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { title, content, author } = req.body;
      if(title == null || content == null || author == null) return reject("not null values");
      const newNote = {
        title: title,
        content: content,
        author: author
      };
      await notesModel.findByIdAndUpdate(req.params.id, newNote);
      resolve("update note");
    } catch (error) {
      reject(`error: ${error}`);
    }
  });
};

notes.deleteNote = (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      await notesModel.findByIdAndDelete(req.params.id);
      resolve("note deleted");
    } catch (error) {
      reject(`error: ${error}`);
    }
  });
};

module.exports = notes;
