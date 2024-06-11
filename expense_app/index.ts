import express from "express";
import path from "path";
import expenseRoutes from "./routes/expenseRoutes";

const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.use("/api/expenses", expenseRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
