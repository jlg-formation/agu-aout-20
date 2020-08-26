import express from "express";
import serveIndex from "serve-index";

const app = express();
const port = 3000;

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
console.log("starting server");
