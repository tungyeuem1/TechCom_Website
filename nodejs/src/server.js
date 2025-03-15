import express from "express";
import cors from "cors";
import connectMongoDB from "./config/dbconfig";
import router from "./routes";

const app = express();
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const dbUrl = process.env.DB_URI || "mongodb+srv://tungyeuem512004:clone12345@techcom.9wrmo.mongodb.net/?retryWrites=true&w=majority&appName=TechCom";

connectMongoDB(dbUrl);

app.use("/", router);

export const viteNodeApp = app;
