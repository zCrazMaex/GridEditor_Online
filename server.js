const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "data.json");

app.use(cors());
app.use(express.json());

// Alle Teams + Fahrer abrufen
app.get("/api/teams", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  res.json(data);
});

// Fahrer zu einem Team hinzufügen
app.post("/api/teams/:team/drivers", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  const team = decodeURIComponent(req.params.team);
  const { name, stints } = req.body;

  if (!data[team]) return res.status(404).json({ error: "Team nicht gefunden" });

  data[team].push({ name, stints });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

// Fahrer-Stints updaten
app.put("/api/teams/:team/drivers/:name", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  const team = decodeURIComponent(req.params.team);
  const driverName = decodeURIComponent(req.params.name);
  const { stints } = req.body;

  const driver = data[team]?.find(d => d.name === driverName);
  if (!driver) return res.status(404).json({ error: "Fahrer nicht gefunden" });

  driver.stints = stints;
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));