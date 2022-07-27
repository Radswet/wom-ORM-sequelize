import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import especialRoutes from "./routes/especial.routes.js";
import inputRoutes from "./routes/input.routes.js";
import seccionRoutes from "./routes/seccion.routes.js";
import templateRoutes from "./routes/template.routes.js";
import valorRoutes from "./routes/valor.routes.js";


// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/especial", especialRoutes);
app.use("/input", inputRoutes);
app.use("/template", templateRoutes);
app.use("/seccion", seccionRoutes);
app.use("/valor", valorRoutes);

export default app;