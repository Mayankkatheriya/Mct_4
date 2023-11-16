const timeCountEl = document.querySelector("#timeCount");

const gameModeEl = document.querySelector("#gameMode");

const reTryEl = document.querySelector("#reTry");
console.log(reTryEl);


reTryEl.addEventListener("click",()=>{
  
  canvas.innerHTML = "";
  gameSelect(9,9,40);
  gameModeEl.selectedIndex=0
})


// running time ke liye
let timer = false;
let counter = 0;
let settimeStart = null;


let canvas = document.getElementById("canvas");

gameSelect(9,9,40);

gameModeEl.addEventListener("change", (e) => {
  console.log(e);
  if (e.target.value == "easy") {


    canvas.innerHTML = "";
    gameSelect(9, 9, 40);
  } else if (e.target.value == "medium") {
    canvas.innerHTML = "";
    gameSelect(18, 14, 25);
  }
  else if(e.target.value == "hard"){
    canvas.innerHTML = "";
    gameSelect(24,20,20);
  }
});

function gameSelect(ROWS, COLS, SIZE) {
  let restartButton = document.getElementById("restart");

  let cells;

  let failedBombKey;
  let revealedKeys;
  let flaggedKeys;
  let map;

  function toKey(row, col) {
    return row + "-" + col;
  }

  function fromKey(key) {
    return key.split("-").map(Number);
  }

  function createButtons() {
    canvas.style.width = ROWS * SIZE + "px";
    canvas.style.height = COLS * SIZE + "px";
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        let cell = document.createElement("button");

        cell.style.float = "left";
        cell.style.width = SIZE + "px";
        cell.style.height = SIZE + "px";
        cell.style.backgroundColor="orangered"


        cell.oncontextmenu = (e) => {
          if (failedBombKey !== null) {
            return;
          }
          e.preventDefault();
          toggleFlag(key);
          updateButtons();
        };
        cell.onclick = (e) => {
          if (failedBombKey !== null) {
            return;
          }
          if (flaggedKeys.has(key)) {
            return;
          }
          revealCell(key);
          updateButtons();
        };
        canvas.appendChild(cell);
        let key = toKey(i, j);
        cells.set(key, cell);
      }
    }
    restartButton.onclick = startGame;
  }

  function startGame() {
    // running time ke liye
    counter = 0;
    timer = false;
    timeCountEl.innerText = "000";
    clearTimeout(settimeStart);

    // running time end

    failedBombKey = null;
    revealedKeys = new Set();
    flaggedKeys = new Set();
    map = generateMap(generateBombs());
    if (cells) {
      updateButtons();
    } else {
      cells = new Map();
      createButtons();
    }
  }

  function updateButtons() {
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        let key = toKey(i, j);
        let cell = cells.get(key);

        cell.style.backgroundColor = "aqua";
        cell.style.color = "black";// ----------------
        cell.textContent = "";
        cell.disabled = false;

        let value = map.get(key);
        if (failedBombKey !== null && value === "bomb") {
          cell.disabled = true;
          cell.textContent = "💣";
          if (key === failedBombKey) {
            cell.style.backgroundColor = "red";
          }
        } else if (revealedKeys.has(key)) {
          cell.disabled = true;
          if (value === undefined) {
            // empty
          } else if (value === 1) {
            cell.textContent = "1";
            cell.style.color = "blue";
          } else if (value === 2) {
            cell.textContent = "2";
            cell.style.color = "green";
          } else if (value >= 3) {
            cell.textContent = value;
            cell.style.color = "red";
          } else {
            throw Error("should never happen");
          }
        } else if (flaggedKeys.has(key)) {
          cell.textContent = "🚩";
        }
      }
    }
    if (failedBombKey !== null) {
      canvas.style.pointerEvents = "none";
      restartButton.style.display = "block";
      clearTimeout(settimeStart)
      
    } else {
      canvas.style.pointerEvents = "";
      restartButton.style.display = "";
    }
  }

  function toggleFlag(key) {
    if (flaggedKeys.has(key)) {
      flaggedKeys.delete(key);
    } else {
      flaggedKeys.add(key);
    }
  }

  function revealCell(key) {
    if (map.get(key) === "bomb") {
      failedBombKey = key;
    } else {
      propagateReveal(key, new Set());
    }
  }

  function propagateReveal(key, visited) {
    revealedKeys.add(key);
    visited.add(key);

    let isEmpty = !map.has(key);
    if (isEmpty) {
      for (let neighborKey of getNeighbors(key)) {
        if (!visited.has(neighborKey)) {
          propagateReveal(neighborKey, visited);
        }
      }
    }
  }

  function isInBounds([row, col]) {
    if (row < 0 || col < 0) {
      return false;
    }
    if (row >= ROWS || col >= COLS) {
      return false;
    }
    return true;
  }

  function getNeighbors(key) {
    let [row, col] = fromKey(key);
    let neighborRowCols = [
      [row - 1, col - 1],
      [row - 1, col],
      [row - 1, col + 1],
      [row, col - 1],
      [row, col + 1],
      [row + 1, col - 1],
      [row + 1, col],
      [row + 1, col + 1],
    ];
    return neighborRowCols.filter(isInBounds).map(([r, c]) => toKey(r, c));
  }

  function generateBombs() {
    let count = Math.round(Math.sqrt(ROWS * COLS));
    let bombs = [];
    let allKeys = [];
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        allKeys.push(toKey(i, j));
      }
    }
    allKeys.sort(() => {
      let coinFlip = Math.random() > 0.5;
      return coinFlip ? 1 : -1;
    });
    return allKeys.slice(0, count);
  }

  function generateMap(seedBombs) {
    let map = new Map();
    function incrementDanger(neighborKey) {
      if (!map.has(neighborKey)) {
        map.set(neighborKey, 1);
      } else {
        let oldVal = map.get(neighborKey);
        if (oldVal !== "bomb") {
          map.set(neighborKey, oldVal + 1);
        }
      }
    }
    for (let key of seedBombs) {
      map.set(key, "bomb");
      for (let neighborKey of getNeighbors(key)) {
        incrementDanger(neighborKey);
      }
    }
    return map;
  }

  startGame();

  canvas.addEventListener("click", () => {
    if (timer == false) {
      timer = true;
      timeCountStatr();
    }
  });

  function timeCountStatr() {
    counter++;
    // Format the counter to always have three digits
    const formattedCounter = ("000" + counter).slice(-3);
    timeCountEl.innerText = formattedCounter;

    // setInterval(timeCountStatr, 1000);
    settimeStart = setTimeout(timeCountStatr, 1000);
    // timer == true;
  }
}

