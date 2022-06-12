import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
// import path  from "express/lib/application";
// const path = path()
// const express = require('express')

const app = express();

const port = process.env.PORT || 5000
// app.use(express.static(path.join(__dirname + "../public")))
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.nzlln.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(port))
  .then(() =>
    console.log(`Connected TO Database and Listening TO ${port}`)
  )
  .catch((err) => console.log(err));
