const { Router } = require("express");
const router = Router();

router.route("/")
    .get((req, res) => res.send("users routes"));

module.exports = router;
