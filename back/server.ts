import express from "express";
import serveIndex from "serve-index";
import cors from "cors";
import { Article } from "../front/src/app/interfaces/article";

const app = express();
const port = 3000;
const www = "../front/dist/front";

app.use(cors());
app.use(express.json());

const articles = [
  { name: "Tournevis", price: 2.44, qty: 140 },
  { name: "Tournevis cruciforme", price: 2.78, qty: 110 },
  { name: "Marteau", price: 1.2, qty: 25 },
  { name: "Pince", price: 4.21, qty: 13 },
];


app.get("/ws/articles", (req, res) => {
  res.json(articles);
});

app.post("/ws/articles", (req, res) => {
  const a = req.body as Article;
  articles.push(a);
  res.status(201).json(a);
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
console.log("starting server");
