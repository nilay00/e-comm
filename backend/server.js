import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRouter from "./routes/categoryRouter.js";
import ProductRouter from "./routes/ProductRouter.js";
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

// routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", ProductRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
