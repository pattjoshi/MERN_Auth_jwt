import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookiParser from "cookie-parser";

import { errorHandler, notFoutd } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiParser());
connectDB();

app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Server is ready");
  });
}

app.use(notFoutd);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started at port ${port}`));
