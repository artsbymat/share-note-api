import express from "express";
import shareRoutes from "./routes/share.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 8080;

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "API Online!" });
});
app.use("/share", shareRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

export default app.handle;
