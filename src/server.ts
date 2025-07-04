import express from "express";
import { Request, Response } from "express";

const app = express();
const PORT: number = 3000;

const data = [
  { "livro": "GENESIS", "capitulo": 1, "audioUrl": "http://localhost:3000/audios/GEN_001.mp3" },
  { "livro": "GENESIS", "capitulo": 2, "audioUrl": "http://localhost:3000/audios/GEN_002.mp3" }
];

app.get("/audios", (req: Request, res: Response) => {
  res.json(data);
});

app.listen(PORT, () => console.log(`Servidor ativo porta: ${PORT}`));