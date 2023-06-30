import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import Connection from "./connection/db.js";
import DefaultData from "./default.js";
import Route from "./routes/Route.js";

const app = express();
dotenv.config();


app.use(cors());
app.use("/", Route);


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT = 8000;

Connection(username,password);

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);

DefaultData();
