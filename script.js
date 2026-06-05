// =====================
// API URL
// =====================
const API = "https://grideditor-online.onrender.com"; // ← deine echte Render URL

// =====================
// STATE
// =====================
const driverState = {}; // wird jetzt vom Server befüllt
let results = [];
let lastSortedResults = [];
let currentGridOrder = [];
let driverOverrides = {};

// =====================
// INIT
// =====================
document.addEventListener("DOMContentLoaded", () => {
  loadTeams(); // holt Daten vom Server und initialisiert alles

  document.getElementById("addDriverBtn")
    .addEventListener("click", addDriver);

  document.getElementById("calculateBtn")
    .addEventListener("click", calculateReverseGrid);
});

// =====================
// DATEN VOM SERVER LADEN
// =====================
async function loadTeams() {
  try {
    const res = await fetch(`${API}/api/teams`);
    const data = await res.json();
    Object.assign(driverState, data);

    initTeamDropdown();
    renderDriverOverview();
    buildResultsTable();
    createSwapButtons();
  } catch (err) {
    console.error("Fehler beim Laden der Teams:", err);
  }
}

// =====================
// TEAM DROPDOWN
// =====================
function initTeamDropdown() {
  const select = document.getElementById("teamSelect");

  select.innerHTML =
    `<option value="">-- Team wählen --</option>` +
    Object.keys(driverState)
      .map(t => `<option value="${t}">${t}</option>`)
      .join("");
}

// =====================
// DRIVER ADD
// =====================
async function addDriver() {
  const team = document.getElementById("teamSelect").value;
  const name = document.getElementById("driverName").value.trim();
  const stintsRaw = document.getElementById("stintsInput").value;

  if (!team || !name) return;

  const stints = stintsRaw
    .split(",")
    .map(s => Number(s.trim()))
    .filter(n => !isNaN(n));

  try {
    await fetch(`${API}/api/teams/${encodeURIComponent(team)}/drivers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, stints })
    });

    driverState[team].push({ name, stints });

    document.getElementById("driverName").value = "";
    document.getElementById("stintsInput").value = "";

    renderDriverOverview();
  } catch (err) {
    console.error("Fehler beim Hinzufügen des Fahrers:", err);
  }
}

// =====================
// DRIVER STINTS UPDATE
// =====================
async function updateDriverStints(team, driverName, stints) {
  try {
    await fetch(`${API}/api/teams/${encodeURIComponent(team)}/drivers/${encodeURIComponent(driverName)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stints })
    });
  } catch (err) {
    console.error("Fehler beim Updaten der Stints:", err);
  }
}

// =====================
// DRIVER OVERVIEW
// =====================
function renderDriverOverview() {
  const container = document.getElementById("driverOverview");
  container.innerHTML = "";

  Object.entries(driverState).forEach(([team, drivers]) => {
    const teamBlock = document.createElement("div");

    teamBlock.innerHTML = `<h3>${team}</h3>`;

    drivers.forEach((driver, driverIndex) => {
      const driverBox = document.createElement("div");
      driverBox.style.marginBottom = "12px";

      for (let i = 0; i < 15; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.min = 1;
        input.max = 28;
        input.style.width = "60px";
        input.style.marginRight = "5px";

        input.value = driver.stints[i] ?? "";

        input.addEventListener("input", () => {
          const parentStints = [];

          driverBox.querySelectorAll("input").forEach(inp => {
            const val = Number(inp.value);
            if (!isNaN(val) && inp.value !== "") {
              parentStints.push(val);
            }
          });

          driverState[team][driverIndex].stints = parentStints;

          // ← ans Backend senden
          updateDriverStints(team, driver.name, parentStints);
        });

        driverBox.appendChild(input);
      }

      const label = document.createElement("div");
      label.textContent = driver.name;
      label.style.fontWeight = "bold";

      driverBox.prepend(label);
      teamBlock.appendChild(driverBox);
    });

    container.appendChild(teamBlock);
  });
}

// =====================
// RESULTS TABLE
// =====================
function buildResultsTable() {
  const tbody = document.querySelector("#resultsTable tbody");
  tbody.innerHTML = "";

  for (let i = 1; i <= 22; i++) {
    const tr = document.createElement("tr");

    const teamSelect = document.createElement("select");
    const driverSelect = document.createElement("select");
    const placeInput = document.createElement("input");

    teamSelect.classList.add("team");
    driverSelect.classList.add("driver");
    placeInput.classList.add("place");

    placeInput.type = "number";
    placeInput.min = 1;
    placeInput.max = 22;

    teamSelect.innerHTML =
      `<option value="">Team</option>` +
      Object.keys(driverState)
        .map(t => `<option value="${t}">${t}</option>`)
        .join("");

    driverSelect.innerHTML = `<option value="">Fahrer</option>`;

    function updateDrivers() {
      const team = teamSelect.value;
      const stint = Number(document.getElementById("stintInput").value);

      driverSelect.innerHTML = `<option value="">Fahrer</option>`;

      if (!team || !stint) return;

      const drivers = driverState[team] || [];

      const validDrivers = drivers.filter(d =>
        (d.stints || []).includes(stint)
      );

      driverSelect.innerHTML += validDrivers
        .map(d => `<option value="${d.name}">${d.name}</option>`)
        .join("");
    }

    teamSelect.addEventListener("change", updateDrivers);
    document.getElementById("stintInput").addEventListener("input", updateDrivers);

    const startTd = document.createElement("td");
    startTd.textContent = i;

    const teamTd = document.createElement("td");
    const driverTd = document.createElement("td");
    const placeTd = document.createElement("td");

    teamTd.appendChild(teamSelect);
    driverTd.appendChild(driverSelect);
    placeTd.appendChild(placeInput);

    tr.appendChild(startTd);
    tr.appendChild(teamTd);
    tr.appendChild(driverTd);
    tr.appendChild(placeTd);

    tbody.appendChild(tr);
  }
}

// =====================
// REVERSE GRID
// =====================
function calculateReverseGrid() {
  driverOverrides = {};
  const stint = Number(document.getElementById("stintInput").value);
  const rows = document.querySelectorAll("#resultsTable tbody tr");

  results = [];

  rows.forEach(row => {
    const team = row.querySelector(".team")?.value;
    const driver = row.querySelector(".driver")?.value;
    const place = row.querySelector(".place")?.value;

    if (!team || !driver || place === "" || place === null) return;

    results.push({
      stint,
      team,
      driver,
      place: Number(place)
    });
  });

  lastSortedResults = [...results].sort((a, b) => Number(a.place) - Number(b.place));
  currentGridOrder = [...lastSortedResults];
  renderNextGrid(currentGridOrder);
}

// =====================
// NEXT GRID
// =====================
function renderNextGrid(sortedResults) {
  const tbody = document.querySelector("#nextGridTable tbody");
  tbody.innerHTML = "";

  const currentStint = Number(document.getElementById("stintInput").value);
  const nextStint = currentStint + 1;

  const reverseGrid = [...currentGridOrder].sort((a, b) => b.place - a.place);

  const usedDrivers = new Set();
  let startPos = 1;

  reverseGrid.forEach(result => {
    const team = result.team;
    const drivers = driverState[team] || [];

    const overriddenName = driverOverrides[startPos];
    let assignedName;

    if (overriddenName) {
      assignedName = overriddenName;
      usedDrivers.add(`${team}-${overriddenName}`);
    } else {
      const availableDrivers = drivers.filter(d =>
        d.stints.includes(nextStint) &&
        !usedDrivers.has(`${team}-${d.name}`)
      );

      const driver = availableDrivers[0] || drivers.find(d =>
        d.stints.includes(nextStint)
      );

      assignedName = driver ? driver.name : "❌ kein Fahrer";

      if (driver) {
        usedDrivers.add(`${team}-${driver.name}`);
      }
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${startPos}</td>
      <td>${team}</td>
      <td>${assignedName}</td>
    `;
    startPos++;
    tbody.appendChild(tr);
  });
}

// =====================
// SWAP DRIVERS
// =====================
function createSwapButtons() {
  const container = document.getElementById("nextGridTable");

  document.querySelectorAll(".swap-btn").forEach(b => b.remove());

  Object.keys(driverState).forEach(team => {
    const btn = document.createElement("button");
    btn.textContent = `${team}: Fahrer tauschen`;
    btn.classList.add("swap-btn");
    btn.style.margin = "5px";

    btn.addEventListener("click", () => swapTeamDrivers(team));

    container.parentNode.insertBefore(btn, container);
  });
}

function swapTeamDrivers(team) {
  const tbody = document.querySelector("#nextGridTable tbody");
  const rows = [...tbody.querySelectorAll("tr")];

  const teamRows = rows
    .map((row, i) => ({ row, pos: i + 1, teamName: row.cells[1].textContent }))
    .filter(r => r.teamName === team);

  if (teamRows.length < 2) return;

  const nameA = teamRows[0].row.cells[2].textContent;
  const nameB = teamRows[1].row.cells[2].textContent;

  driverOverrides[teamRows[0].pos] = nameB;
  driverOverrides[teamRows[1].pos] = nameA;

  renderNextGrid(currentGridOrder);
}
