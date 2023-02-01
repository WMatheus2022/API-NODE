const express = require("express");
const routes = express.Router();

let db = [
  {
    id: "1",
    name: "wander",
    function: "Codar o tempo todo",
  },
  {
    id: "2",
    name: "matheus",
    function: "Codar bastante",
  },
  {
    id: "3",
    name: "pacheco",
    function: "Codar com qualidade",
  },
];

// Buscar Dados
routes.get("/", (req, res) => {
  return res.json(db);
});

// Adicionar Dados
routes.post("/add", (req, res) => {
  const body = req.body();

  if (!body) return res.status(404).end();
  db.push(body);
  return res.json(body);
});

routes.delete("/:id", (req, res) => {
  const id = req.params.id;

  let newDB = db.filter((item) => {
    if (!item[id]) return item;
  });

  newDB = db;

  return res.send(newDB);
});

module.exports = routes;
