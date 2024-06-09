import express from "express";
import cors from "cors";
import accountRoutes from "./routes/accounts.routes.js";
import movementRoutes from "./routes/movements.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(accountRoutes);
app.use(movementRoutes);

export default app;
