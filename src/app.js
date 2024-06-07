import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
    exposedHeaders: ["Set-Cookie"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

import destinationRouter from "./routes/destination.route.js";
import contactRouter from "./routes/contact.route.js";

app.use("/api/v1/destinations", destinationRouter);
app.use("/api/v1/contact", contactRouter);

export { app };
