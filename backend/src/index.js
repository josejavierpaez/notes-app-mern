const app = require("./app");
const PORT = 4000;
const colors = require("colors");

async function Main(){
    await app.listen(PORT,() => console.log(`server on port ${PORT}`.green));
}

Main();