const { Router } = require("express");
const router = Router();
const {
  getNotes,
  createNote,
  deleteNote,
  updateNote,
  getNote
} = require("../controllers/notesControllers");
router
  .route("/")
  .get(getNotes)
  .post((req, res) => res.json({ message: "get request" }));

router
  .route("/:id")
  .get(getNote)
  .post(createNote)
  .put(updateNote)
  .delete(deleteNote);

module.exports = router;
