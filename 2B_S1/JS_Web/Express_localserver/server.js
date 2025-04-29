const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Jednoduchý datový sklad
let data = { hodnota: "BLEEEEE" };

// Získání aktuální hodnoty
app.get("/data", (req, res) => {
  res.json(data);
});

// Změna hodnoty
app.post("/data", (req, res) => {
  const novaHodnota = req.body.hodnota;
  if (!novaHodnota) {
    return res.status(400).json({ error: "Chybí 'hodnota' v těle požadavku." });
  }

  data.hodnota = novaHodnota;
  res.json({ zprava: "Hodnota byla změněna.", nova: data.hodnota });
});

app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`);
});