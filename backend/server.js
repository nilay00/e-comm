import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
dotenv.config();

connectDB();
const app = express();
//res API
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Ecommerce app is working");
});
app.use("/api/v1/auth", authRoute);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
