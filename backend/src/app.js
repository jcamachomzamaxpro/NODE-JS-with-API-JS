import express from 'express';
import categoriaRoutes from './routes/categorias.routes.js';

// Cuando se importan paquetes no llevan { }
const app = express();

app.set("port", 5010);
<<<<<<< HEAD
=======
// app.use(express.json());

// Routes
app.use("/api/categorias", categoriaRoutes);
// cuando se ejecute saldra cannot GET pero toca complementar la url con /api/categorias

>>>>>>> 16b4dec (feat: :sparkles: Node JS - Routes - Controllers)

export default app;