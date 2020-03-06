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
router
  .route("/")
  .get((req, res) => {
    getNotes(req, res).then(notes => {
      response.success(req, res, notes, 200);
    });
  })
  .post((req, res) => {
    createNote(req, res)
      .then(notes => {
        response.success(req, res, notes, 200);
      })
      .catch(error => {
        response.error(req, res, error, 500, "error into controller");
      });
  });

router
  .route("/:id")
  .get((req, res) => {
    getNote(req, res)
      .then(note => {
        response.success(req, res, note, 200);
      })
      .catch(error => {
        response.error(req, res, error, 500, "error into controller");
      });
  })
  .post((req, res) => {
    createNote(req, res)
      .then(notes => {
        response.success(req, res, notes, 200);
      })
      .catch(error => {
        response.error(req, res, error, 500, "error into controller");
      });
  })
  .put((req, res) => {
    updateNote(req, res)
      .then(notes => {
        response.success(req, res, notes, 200);
      })
      .catch(error => {
        response.error(req, res, error, 500, "error into controller");
      });
  })
  .delete((req, res) => {
    deleteNote(req, res)
      .then(notes => {
        response.success(req, res, notes, 200);
      })
      .catch(error => {
        response.error(req, res, error, 500, "error into controller");
      });
  });

module.exports = router;
