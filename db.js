const mongoose = require("mongoose");

const mongoDB =
  process.env.MONGODB_URI ||
  "mongodb+srv://ninja:93FF6W2BppfCDd0K@cluster0.pkknrum.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((error) => {
    console.log("Connection Error: ${err.message}");
  });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB Connection Error"));

module.exports = db;
