import express from "express";
import { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from 'url';
import bibleBooks from './data/bibleBooks.json' with { type: 'json' };

// Configuração para __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Configuração para servir arquivos estáticos
app.use("/audios", express.static(path.join(__dirname, "audios")));

app.get("/audios", (req: Request, res: Response) => {
  try {
    const audios = bibleBooks.flatMap(livro =>
      Array.from({ length: livro.capitulos }, (_, i) => ({
        livro: livro.nome,
        sigla: livro.sigla,
        codigo: livro.codigo,
        capitulo: i + 1,
        title: `${livro.nome} ${i + 1}`,
        testamento: livro.testamento,
        file: `/audios/${livro.testamento}/${livro.codigo}/${(i + 1).toString().padStart(3, '0')}.mp3`
      }))
    );
    res.json(audios);
  } catch (error) {
    console.error("Erro ao gerar lista de áudios:", error);
    res.status(500).json({ error: "Erro ao gerar lista" });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Bible API está funcionando",
    endpoints: {
      audios: "/audios",
      audioFiles: "/audios/{testamento}/{codigoLivro}/{capitulo}.mp3"
    }
  });
});

app.listen(PORT, () => console.log(`Servidor ativo na porta: ${PORT}`));