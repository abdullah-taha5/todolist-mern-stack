import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/todosList.js";

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/", router)

mongoose.connect("mongodb+srv://todo:a01228335760@cluster0.gejsnkp.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Connected To Data Base"))
.then(error => console.error(error));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`http://localhost:${PORT}`));

