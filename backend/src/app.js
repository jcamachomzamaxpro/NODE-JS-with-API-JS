import express from 'express';
// Cuando se importan paquetes no llevan { }
const app = express();

app.set("port", 5010);

export default app;