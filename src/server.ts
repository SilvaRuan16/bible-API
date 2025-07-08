import express from "express";
import type { Express, Request, Response } from "express";
import path from "path";

const app: Express = express();
const PORT: number = 3000;

app.use("/audios", express.static(path.join(__dirname, "audios")));

interface AudioBiblia {
  nome: string,
  sigla: string,
  capitulos: number,
  codigo: string,
  testamento: "velhoTestamento" | "novoTestamento"
}

const audios: AudioBiblia[] = [
  // ANTIGO TESTAMENTO
  { "nome": "GÊNESIS", "sigla": "GEN", "capitulos": 50, "codigo": "A01", "testamento": "velhoTestamento" },
  { "nome": "ÊXODO", "sigla": "EXO", "capitulos": 40, "codigo": "A02", "testamento": "velhoTestamento" },
  { "nome": "LEVÍTICO", "sigla": "LEV", "capitulos": 27, "codigo": "A03", "testamento": "velhoTestamento" },
  { "nome": "NÚMEROS", "sigla": "NUM", "capitulos": 36, "codigo": "A04", "testamento": "velhoTestamento" },
  { "nome": "DEUTERONÔMIO", "sigla": "DEU", "capitulos": 34, "codigo": "A05", "testamento": "velhoTestamento" },
  { "nome": "JOSUÉ", "sigla": "JOS", "capitulos": 24, "codigo": "A06", "testamento": "velhoTestamento" },
  { "nome": "JUÍZES", "sigla": "JDG", "capitulos": 21, "codigo": "A07", "testamento": "velhoTestamento" },
  { "nome": "RUTE", "sigla": "RUT", "capitulos": 4, "codigo": "A08", "testamento": "velhoTestamento" },
  { "nome": "1 SAMUEL", "sigla": "1SA", "capitulos": 31, "codigo": "A09", "testamento": "velhoTestamento" },
  { "nome": "2 SAMUEL", "sigla": "2SA", "capitulos": 24, "codigo": "A10", "testamento": "velhoTestamento" },
  { "nome": "1 REIS", "sigla": "1KI", "capitulos": 22, "codigo": "A11", "testamento": "velhoTestamento" },
  { "nome": "2 REIS", "sigla": "2KI", "capitulos": 25, "codigo": "A12", "testamento": "velhoTestamento" },
  { "nome": "1 CRÔNICAS", "sigla": "1CH", "capitulos": 29, "codigo": "A13", "testamento": "velhoTestamento" },
  { "nome": "2 CRÔNICAS", "sigla": "2CH", "capitulos": 36, "codigo": "A14", "testamento": "velhoTestamento" },
  { "nome": "ESDRAS", "sigla": "EZR", "capitulos": 10, "codigo": "A15", "testamento": "velhoTestamento" },
  { "nome": "NEEMIAS", "sigla": "NEH", "capitulos": 13, "codigo": "A16", "testamento": "velhoTestamento" },
  { "nome": "ESTER", "sigla": "EST", "capitulos": 10, "codigo": "A17", "testamento": "velhoTestamento" },
  { "nome": "JÓ", "sigla": "JOB", "capitulos": 42, "codigo": "A18", "testamento": "velhoTestamento" },
  { "nome": "SALMOS", "sigla": "PSA", "capitulos": 150, "codigo": "A19", "testamento": "velhoTestamento" },
  { "nome": "PROVÉRBIOS", "sigla": "PRO", "capitulos": 31, "codigo": "A20", "testamento": "velhoTestamento" },
  { "nome": "ECLESIASTES", "sigla": "ECC", "capitulos": 12, "codigo": "A21", "testamento": "velhoTestamento" },
  { "nome": "CÂNTICOS", "sigla": "SNG", "capitulos": 8, "codigo": "A22", "testamento": "velhoTestamento" },
  { "nome": "ISAÍAS", "sigla": "ISA", "capitulos": 66, "codigo": "A23", "testamento": "velhoTestamento" },
  { "nome": "JEREMIAS", "sigla": "JER", "capitulos": 52, "codigo": "A24", "testamento": "velhoTestamento" },
  { "nome": "LAMENTAÇÕES", "sigla": "LAM", "capitulos": 5, "codigo": "A25", "testamento": "velhoTestamento" },
  { "nome": "EZEQUIEL", "sigla": "EZK", "capitulos": 48, "codigo": "A26", "testamento": "velhoTestamento" },
  { "nome": "DANIEL", "sigla": "DAN", "capitulos": 12, "codigo": "A27", "testamento": "velhoTestamento" },
  { "nome": "OSEIAS", "sigla": "HOS", "capitulos": 14, "codigo": "A28", "testamento": "velhoTestamento" },
  { "nome": "JOEL", "sigla": "JOL", "capitulos": 3, "codigo": "A29", "testamento": "velhoTestamento" },
  { "nome": "AMÓS", "sigla": "AMO", "capitulos": 9, "codigo": "A30", "testamento": "velhoTestamento" },
  { "nome": "OBADIAS", "sigla": "OBA", "capitulos": 1, "codigo": "A31", "testamento": "velhoTestamento" },
  { "nome": "JONAS", "sigla": "JON", "capitulos": 4, "codigo": "A32", "testamento": "velhoTestamento" },
  { "nome": "MIQUÉIAS", "sigla": "MIC", "capitulos": 7, "codigo": "A33", "testamento": "velhoTestamento" },
  { "nome": "NAUM", "sigla": "NAM", "capitulos": 3, "codigo": "A34", "testamento": "velhoTestamento" },
  { "nome": "HABACUQUE", "sigla": "HAB", "capitulos": 3, "codigo": "A35", "testamento": "velhoTestamento" },
  { "nome": "SOFONIAS", "sigla": "ZEP", "capitulos": 3, "codigo": "A36", "testamento": "velhoTestamento" },
  { "nome": "AGEU", "sigla": "HAG", "capitulos": 2, "codigo": "A37", "testamento": "velhoTestamento" },
  { "nome": "ZACARIAS", "sigla": "ZEC", "capitulos": 14, "codigo": "A38", "testamento": "velhoTestamento" },
  { "nome": "MALAQUIAS", "sigla": "MAL", "capitulos": 4, "codigo": "A39", "testamento": "velhoTestamento" },

  // NOVO TESTAMENTO
  { "nome": "MATEUS", "sigla": "MAT", "capitulos": 28, "codigo": "B01", "testamento": "novoTestamento" },
  { "nome": "MARCOS", "sigla": "MRK", "capitulos": 16, "codigo": "B02", "testamento": "novoTestamento" },
  { "nome": "LUCAS", "sigla": "LUK", "capitulos": 24, "codigo": "B03", "testamento": "novoTestamento" },
  { "nome": "JOÃO", "sigla": "JHN", "capitulos": 21, "codigo": "B04", "testamento": "novoTestamento" },
  { "nome": "ATOS", "sigla": "ACT", "capitulos": 28, "codigo": "B05", "testamento": "novoTestamento" },
  { "nome": "ROMANOS", "sigla": "ROM", "capitulos": 16, "codigo": "B06", "testamento": "novoTestamento" },
  { "nome": "1 CORÍNTIOS", "sigla": "1CO", "capitulos": 16, "codigo": "B07", "testamento": "novoTestamento" },
  { "nome": "2 CORÍNTIOS", "sigla": "2CO", "capitulos": 13, "codigo": "B08", "testamento": "novoTestamento" },
  { "nome": "GÁLATAS", "sigla": "GAL", "capitulos": 6, "codigo": "B09", "testamento": "novoTestamento" },
  { "nome": "EFÉSIOS", "sigla": "EPH", "capitulos": 6, "codigo": "B10", "testamento": "novoTestamento" },
  { "nome": "FILIPENSES", "sigla": "PHP", "capitulos": 4, "codigo": "B11", "testamento": "novoTestamento" },
  { "nome": "COLOSSENSES", "sigla": "COL", "capitulos": 4, "codigo": "B12", "testamento": "novoTestamento" },
  { "nome": "1 TESSALONICENSES", "sigla": "1TH", "capitulos": 5, "codigo": "B13", "testamento": "novoTestamento" },
  { "nome": "2 TESSALONICENSES", "sigla": "2TH", "capitulos": 3, "codigo": "B14", "testamento": "novoTestamento" },
  { "nome": "1 TIMÓTEO", "sigla": "1TI", "capitulos": 6, "codigo": "B15", "testamento": "novoTestamento" },
  { "nome": "2 TIMÓTEO", "sigla": "2TI", "capitulos": 4, "codigo": "B16", "testamento": "novoTestamento" },
  { "nome": "TITO", "sigla": "TIT", "capitulos": 3, "codigo": "B17", "testamento": "novoTestamento" },
  { "nome": "FILEMOM", "sigla": "PHM", "capitulos": 1, "codigo": "B18", "testamento": "novoTestamento" },
  { "nome": "HEBREUS", "sigla": "HEB", "capitulos": 13, "codigo": "B19", "testamento": "novoTestamento" },
  { "nome": "TIAGO", "sigla": "JAS", "capitulos": 5, "codigo": "B20", "testamento": "novoTestamento" },
  { "nome": "1 PEDRO", "sigla": "1PE", "capitulos": 5, "codigo": "B21", "testamento": "novoTestamento" },
  { "nome": "2 PEDRO", "sigla": "2PE", "capitulos": 3, "codigo": "B22", "testamento": "novoTestamento" },
  { "nome": "1 JOÃO", "sigla": "1JN", "capitulos": 5, "codigo": "B23", "testamento": "novoTestamento" },
  { "nome": "2 JOÃO", "sigla": "2JN", "capitulos": 1, "codigo": "B24", "testamento": "novoTestamento" },
  { "nome": "3 JOÃO", "sigla": "3JN", "capitulos": 1, "codigo": "B25", "testamento": "novoTestamento" },
  { "nome": "JUDAS", "sigla": "JUD", "capitulos": 1, "codigo": "B26", "testamento": "novoTestamento" },
  { "nome": "APOCALIPSE", "sigla": "REV", "capitulos": 22, "codigo": "B27", "testamento": "novoTestamento" },
];

app.get("/audios", (req: Request, res: Response) => {
  try {
    const a = audios.flatMap(audio => Array.from({length: audio.capitulos}, (_,i) => {
      const capitulo = (i + 1).toString().padStart(3, "0");
      const prefixo = audio.testamento === "velhoTestamento" ? "PORBBSO1DA" : "PORBBSN1DA";
      return {
        livro: audio.nome,
        capitulo: `${i + 1}`,
        title: `${audio.nome} ${i + 1}`,
        file: `/audios/${audio.testamento}/${prefixo}_${audio.codigo}_${audio.sigla}_${capitulo}.mp3`
      };
    }));
    res.json(a);
  } catch (error) {
    console.log(error);
    res.status(500).json({ "message": `Ocorreu um erro interno no servidor.` });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Bible API está funcionando" });
});

app.listen(PORT, () => console.log(`Servidor ativo porta: ${PORT}`));