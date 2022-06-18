import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const app = express();

import PackageRoute from "./Routes/Package.js";

//Configuration
dotenv.config();

const PORT = process.env.PORT || 8800;

app.use(bodyParser.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

//importing routes
app.use("/packages", PackageRoute);
//routes
app.get("/", (req, res) => {
  res.send("We are on home page");
});

mongoose.connect(
  process.env.MongoDB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

//listens on port 3001
app.listen(PORT, () => console.log("Server Started"));
