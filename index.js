import cookieParser from "cookie-parser";
import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/user.js";
import trialRouter from "./routes/clinic.js";

export const app = express();

config({
  path: "./data/config.env",
});

app.use(express.json());

app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/trials", trialRouter);

app.get("/", (req, res) => {
  res.send("done");
});
