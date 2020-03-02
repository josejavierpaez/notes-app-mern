const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

if(!URI){
  throw new Error("DB URI undefined");
}

mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected".green);
});
