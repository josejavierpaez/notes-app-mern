const { Router } = require("express");
const router = Router();
const response = require("../response");
const {
  createUser,
  getUsers,
  deleteUser
} = require("../controllers/usersControllers");

router.route("/").get((req, res) => {
  getUsers()
    .then(users => {
      response.success(req, res, users, 201);
    })
    .catch(error => {
      response.error(req, res, error, 500, "error into controller");
    });
});

router
  .route("/:id")
  .post((req, res) => {
    createUser()
      .then(user => {
        response.success(req, res, user, 200);
      })
      .catch(error => {
        response.error(req, res, error, 500, "error into controller");
      });
  })
  .delete((req, res) => {
    deleteUser()
      .then(user => {
        response.success(req, res, user, 200);
      })
      .catch(error => {
        response.error(req, res, error, 500, "error into controller");
      });
  });

module.exports = router;
