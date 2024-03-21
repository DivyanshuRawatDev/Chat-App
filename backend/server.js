import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Jooly");
});

// Routes :-
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Coonecting to database:-
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
