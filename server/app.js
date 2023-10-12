const express = require("express");
// const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const creatuser = require("./routes/userRoutes");

require("dotenv").config();

const connectDB = require("./DB/db");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.use("/api", creatuser);

app.get("/", (req, res) => {
  res.send("Hello Wordl");
});
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not found</h1>");
});

app.listen(PORT, async () => {
  console.log(`server is running at http://localhost:${PORT}`);
  await connectDB();
});
