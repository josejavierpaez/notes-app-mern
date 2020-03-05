const { Router } = require("express");
const router = Router();
const {
  createUser,
  getUsers,
  deleteUser
} = require("../controllers/usersControllers");

router
.route("/")
.get(getUsers);

router
  .route("/:id")
  .post(createUser)
  .delete(deleteUser);

module.exports = router;
