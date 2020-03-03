require("dotenv").config();

const app = require("./app");
require("./database");
const colors = require("colors");
const PORT = app.get("port");


async function Main() {
  await app.listen(PORT, () => console.log(`server on port ${PORT}`.green));
}

Main();
