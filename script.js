// =====================
// JSON (oder extern geladen)
// =====================
const teamsData = {
  "Red Bull - Bavarian": [
        { "name": "Ben", "stints": [4,5,8,15,19,21,23,27] },
        { "name": "Diminik", "stints": [8,9,11,17,18,19,27] },
        { "name": "DStream", "stints": [7,8] },
        { "name": "Enrico", "stints": [2,3,9,10,24,25,26,28] },
        { "name": "Flo", "stints": [12,14,17,18,24,28] },
        { "name": "Kevin", "stints": [] },
        { "name": "Levi", "stints": [1,11,16] },
        { "name": "Luca", "stints": [1,3,13,14,16,20,25] },
        { "name": "Niklas", "stints": [4,5,6,7,13,22,23] },
        { "name": "Robin", "stints": [2,10,12,26] },
        { "name": "Maex", "stints": [6,7,15,20,21,22] }
    ],
    "Mercedes - Kaiserschmarn": [
        { "name": "Basti", "stints": [3,5,6,9,19,22,24,27] },
        { "name": "Eddi", "stints": [1,3,10,18,19,22,24,25] },
        { "name": "Finjes", "stints": [4,12,13,14,20] },
        { "name": "Itzzwertz", "stints": [1,2,8,9,10,11,16,17] },
        { "name": "Lachs Rosa", "stints": [5,6,7,8,13,14,15,16,23,26,27,28] },
        { "name": "Nivas", "stints": [4,5,6,7,21,25] },
        { "name": "Reggae", "stints": [] },
        { "name": "Seisi", "stints": [18,20,21,23,26] },
        { "name": "Soulix", "stints": [2,11,12,15,17,28] }
    ],
    "Ferrari - JNK": [
        { "name": "Dave", "stints": [2,5,6,7,8,9,10,11] },
        { "name": "Jannik", "stints": [19] },
        { "name": "Jonas", "stints": [17,18,23] },
        { "name": "Juli", "stints": [1,2,3,4,5,6,7,8,9,21,22] },
        { "name": "NickiBoy", "stints": [1,13,14,19,20,22,24,27,28] },
        { "name": "Niclas", "stints": [18,23] },
        { "name": "Phillip", "stints": [12,13,14,15,16,17,24,25,26,27] },
        { "name": "Rene", "stints": [12,15,20,21,25,26,28] }
    ],
    "McLarren - BRWT": [
        { "name": "Dori", "stints": [10,11,25,26,27] },
        { "name": "Flur-Lustiger", "stints": [9,15,16,28] },
        { "name": "Lebjoern", "stints": [17,27] },
        { "name": "Lewa", "stints": [6,7,13,14] },
        { "name": "Matchball", "stints": [7,8,12,13,15,21,23] },
        { "name": "Mirco", "stints": [1,14,16,17,18] },
        { "name": "Rossi", "stints": [8,11,19,20,25] },
        { "name": "Skyline", "stints": [22,24,26] },
        { "name": "Toasty", "stints": [3,4,5] },
        { "name": "Tom", "stints": [2,3,4,5,6,18,19,20,21,22] },
        { "name": "Tompryce", "stints": [10,28] },
        { "name": "Tyga", "stints": [1,12] },
        { "name": "xiMK6x", "stints": [2,9,23,24] }
    ],
    "Haas - Elite": [
        { "name": "Barut", "stints": [9,11,12,13] },
        { "name": "Blacksky", "stints": [1,4,9,10,12,15,20,21,22,24] },
        { "name": "Coren", "stints": [6,7,10,11,23,24,26,27] },
        { "name": "AFRL_Felix", "stints": [16,17,25] },
        { "name": "z_Felix", "stints": [14,27] },
        { "name": "Fynn", "stints": [2,3,5,8,20,21,22] },
        { "name": "Heinzi", "stints": [3,4,13,14] },
        { "name": "Jonas", "stints": [1,5,6,7,8,18,19,28] },
        { "name": "Till", "stints": [16,17,25] },
        { "name": "Valen", "stints": [2,15,18,19,26,28] }
    ],
    "Alpine - Total": [
        { "name": "777", "stints": [5,6] },
        { "name": "Cole", "stints": [1,14,16] },
        { "name": "Dylan", "stints": [6,7] },
        { "name": "Felixione", "stints": [8,13,18,20,21,24,28] },
        { "name": "Jeremy", "stints": [2,5,17,23] },
        { "name": "Jill", "stints": [7,9] },
        { "name": "Kartrcer", "stints": [1,28] },
        { "name": "Max", "stints": [3,12,25] },
        { "name": "Mihai", "stints": [13,16,27] },
        { "name": "Miles", "stints": [11] },
        { "name": "Morbat", "stints": [14,15,27] },
        { "name": "Nael Guiot", "stints": [8,11,22] },
        { "name": "Noomycorn", "stints": [2,4,23,26] },
        { "name": "Ossidrei", "stints": [18,25] },
        { "name": "PhantomFox", "stints": [17,21,22] },
        { "name": "Pub_Dogg", "stints": [12,15,20] },
        { "name": "ScoobyDoo", "stints": [3,19] },
        { "name": "TheRealSulli", "stints": [9,10,19,26] },
        { "name": "Totozzino", "stints": [10,24] }
    ],
    "Williams - RFC2": [
        { "name": "Adrian", "stints": [15,16,17,25,27] },
        { "name": "Dahmerkind", "stints": [11,12,14,26,27] },
        { "name": "Denzel", "stints": [14,18,26] },
        { "name": "Julian", "stints": [1,5,8,9,12,13,15,22,28] },
        { "name": "Justin", "stints": [2,5,7,11,16,20,21,24] },
        { "name": "Moritz", "stints": [2,3,4,6,10,19,20,21,28] },
        { "name": "Raphael", "stints": [4,6,7,8,18,22] },
        { "name": "Ruben", "stints": [9,13,17,23] },
        { "name": "Theo", "stints": [1,3,10,19,23,24,25] }
    ],
    "Audi - FEC": [
        { "name": "Aaron", "stints": [3,4,13,17,18] },
        { "name": "Acedmaric", "stints": [1,6,14,15,21,23,26,27,28] },
        { "name": "Basti", "stints": [5,6] },
        { "name": "Bonfo", "stints": [] },
        { "name": "Closaurus", "stints": [3,5,7,19] },
        { "name": "DerMax", "stints": [7,10,23] },
        { "name": "Dome", "stints": [2,10,20] },
        { "name": "Entoon", "stints": [] },
        { "name": "Erenn", "stints": [8,9,11,12,22,24] },
        { "name": "Fileminionn", "stints": [17,18] },
        { "name": "Jayden", "stints": [1,13,14,16] },
        { "name": "Kayden", "stints": [19] },
        { "name": "Leclerccccc", "stints": [2,8,9,11,12,20,22,24] },
        { "name": "Maximilian", "stints": [] },
        { "name": "Quentin", "stints": [21] },
        { "name": "Ricewolf", "stints": [1,4,19,25,28] },
        { "name": "Terje", "stints": [15,16,25,26,27] }
    ],
    "Cadillac RFC1": [
        { "name": "BabyDriver", "stints": [7,10,12,13,15,17,19,22,26,28] },
        { "name": "BreakCheady", "stints": [] },
        { "name": "Corruption", "stints": [14,15,20,21,22,27] },
        { "name": "Eis_Fuzzy", "stints": [1,12,13,14,16] },
        { "name": "Hummel", "stints": [2,3,5,6,7,18,23,25] },
        { "name": "Janni", "stints": [2,3,4,26,27,28] },
        { "name": "Julian", "stints": [1,5,8,9,12,13,15,22,28] },
        { "name": "Nicklas Bergmann", "stints": [8,9,11,19,23] },
        { "name": "Panis", "stints": [1,16,17,18] },
        { "name": "Ruffy", "stints": [4,5,6,8,9,10,11,20,21,24] },
        { "name": "Ziege", "stints": [24,25] }
    ],
    "VCARB - Honda": [        
        { "name": "Alexander", "stints": [10,14,23,27] },
        { "name": "Can", "stints": [1,2,4,8,11,12,15,19,24,27] },
        { "name": "Jerry", "stints": [1,3,6,8,14,16,25] },
        { "name": "Massig", "stints": [10,15,23] },
        { "name": "Nafio", "stints": [12,17] },
        { "name": "Naxy", "stints": [] },
        { "name": "PlayerMadly", "stints": [5,7,20,21,22,26,28] },
        { "name": "Rempf", "stints": [5,7,20,21,22,26,28] },
        { "name": "Seb", "stints": [9,11,13,24] },
        { "name": "TJ", "stints": [2,16,17,18] }
    ],
    "Aston Martin - FSR": [
        { "name": "Deathkira", "stints": [3,4,8,9,17,23,24,27] },
        { "name": "Jukebox", "stints": [] },
        { "name": "Kamams", "stints": [5,6,12,19,22] },
        { "name": "Max", "stints": [1,6,15,17,18,21,23,24,25,28] },
        { "name": "Moralix", "stints": [2,11,15,21,22,26] },
        { "name": "MxMax", "stints": [8,12,16,20] },
        { "name": "PommesMann", "stints": [7,27] },
        { "name": "QualiMerchant", "stints": [20] },
        { "name": "Rubenpro", "stints": [] },
        { "name": "Samuu", "stints": [1,2,3,10,13,14,25,26,28] },
        { "name": "SuperJumper", "stints": [4,5,7,9,19] },
        { "name": "VettelOnTop", "stints": [10,11,13,14,16,18] }
    ]
};

// =====================
// State
// =====================
const driverState = structuredClone(teamsData);
let results = [];
let lastSortedResults = [];
let currentGridOrder = [];
let driverOverrides = {}; // key: "startPos", value: driverName

// =====================
// INIT
// =====================
document.addEventListener("DOMContentLoaded", () => {
  initTeamDropdown();
  renderDriverOverview();

  document.getElementById("addDriverBtn")
    .addEventListener("click", addDriver);

  document.getElementById("calculateBtn")
    .addEventListener("click", calculateReverseGrid);

  buildResultsTable();

  createSwapButtons(); // 👈 NEU
});
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
function addDriver() {
  const team = document.getElementById("teamSelect").value;
  const name = document.getElementById("driverName").value.trim();
  const stintsRaw = document.getElementById("stintsInput").value;

  if (!team || !name) return;

  const stints = stintsRaw
    .split(",")
    .map(s => Number(s.trim()))
    .filter(n => !isNaN(n));

  driverState[team].push({ name, stints });

  document.getElementById("driverName").value = "";
  document.getElementById("stintsInput").value = "";

  renderDriverOverview();
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

      const inputs = [];

      for (let i = 0; i < 15; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.min = 1;
        input.max = 28;
        input.style.width = "60px";
        input.style.marginRight = "5px";

        // vorhandene Werte einsetzen oder leer lassen
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
        });

        inputs.push(input);
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

    // --- Team ---
    teamSelect.innerHTML =
      `<option value="">Team</option>` +
      Object.keys(driverState)
        .map(t => `<option value="${t}">${t}</option>`)
        .join("");

    // --- Fahrer ---
    driverSelect.innerHTML = `<option value="">Fahrer</option>`;

    // =====================
    // FILTER (Team + GLOBAL STINT)
    // =====================
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
    document
      .getElementById("stintInput")
      .addEventListener("input", updateDrivers);

    // --- TDs ---
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
    driverOverrides = {}; // ← Reset bei neuer Berechnung
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

  lastSortedResults = [...results].sort((a, b) => {
  return Number(a.place) - Number(b.place);
});

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

  // 🔥 echtes Reverse Grid
const reverseGrid = [...currentGridOrder]
  .sort((a, b) => b.place - a.place);

  const usedDrivers = new Set();
  let startPos = 1;

 reverseGrid.forEach(result => {
  const team = result.team;
  const drivers = driverState[team] || [];

  const overriddenName = driverOverrides[startPos];

  let assignedName;

  if (overriddenName) {
    // Override hat Vorrang
    assignedName = overriddenName;
    usedDrivers.add(`${team}-${overriddenName}`);
  } else {
    // Normal: ersten verfügbaren Fahrer nehmen
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

  // falls schon Buttons existieren entfernen
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
  // Hole aktuelle Grid-Zeilen dieses Teams (nach startPos)
  const tbody = document.querySelector("#nextGridTable tbody");
  const rows = [...tbody.querySelectorAll("tr")];

  const teamRows = rows
    .map((row, i) => ({ row, pos: i + 1, teamName: row.cells[1].textContent }))
    .filter(r => r.teamName === team);

  if (teamRows.length < 2) return;

  // Fahrernamen aus der Tabelle lesen
  const nameA = teamRows[0].row.cells[2].textContent;
  const nameB = teamRows[1].row.cells[2].textContent;

  // Override: tausche die Namen
  driverOverrides[teamRows[0].pos] = nameB;
  driverOverrides[teamRows[1].pos] = nameA;

  renderNextGrid(currentGridOrder);
}
