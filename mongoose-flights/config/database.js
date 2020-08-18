const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/flights", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on("connect", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
