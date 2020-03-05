const { Router } = require("express");
const router = Router();
const response = require("../response");
const {
  getNotes,
  createNote,
  deleteNote,
  updateNote,
  getNote
} = require("../controllers/notesControllers");
router.route("/").get((req, res) => {
  getNotes().then(notes => {
    response.success(req, res, notes, 200);
  });
});

router
  .route("/:id")
  .get((req, res) => {
    getNote()
      .then(note => {
        response.success(req, res, note, 200);
      })
      .catch(error => {
        response.error(req, res, error, 500, "error into controller");
      });
  })
  .post((req, res) => {
    createNote()
      .then(notes => {
        response.success(req, res, notes, 200);
      })
      .catch(error => {
        response.error(req, res, error, 500, "error into controller");
      });
  })
  .put((req, res) => {
    updateNote()
      .then(notes => {
        response.success(req, res, notes, 200);
      })
      .catch(error => {
        response.error(req, res, error, 500, "error into controller");
      });
  })
  .delete((req, res) => {
    deleteNote()
      .then(notes => {
        response.success(req, res, notes, 200);
      })
      .catch(error => {
        response.error(req, res, error, 500, "error into controller");
      });
  });

module.exports = router;
