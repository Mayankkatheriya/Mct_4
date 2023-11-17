const timeCountEl = document.querySelector("#timeCount");

const gameModeEl = document.querySelector("#gameMode");

const reTryEl = document.querySelector("#reTry");

const upCoverEl = document.querySelector(".upCover");
const gameCoverOpenEl = document.querySelector(".gameCoverOpen");
const downCoverEl = document.querySelector(".downCover");

//  for audio

const addToCartSound = new Audio('/Asset/game-ball-tap.mp3');
const bumbBlast = new Audio('/Asset/mixkit-clear.wav');

// landing page create kr raha he ye --------------------------
gameCoverOpenEl.addEventListener("click",(e)=>{
upCoverEl.style.height = "0%";
upCoverEl.style.transition = "all 1.2s linear";
//  for downCoverEl 
downCoverEl.style.height = "0%";
downCoverEl.style.transition = "all 1.2s linear";

gameCoverOpenEl.style.display = "none"
gameCoverOpenEl.style.transition = "all 0.2s linear";
addToCartSound.play();


// landing page code end --------------------------

});




// function audio(){
//   let gameAudio = new Audio("./Asset/game-ball-tap.mp3");
//   // gameAudio.src ="./Asset/game-ball-tap.mp3";
// } 
// ye function X pe click krne se hme game ko again start kr deta he ----------------------------

reTryEl.addEventListener("click",()=>{
  
  canvas.innerHTML = "";
  gameSelect(9,9,40);
  gameModeEl.selectedIndex=0;
  console.log("d");
  // audio();
  
    addToCartSound.play();
 
})




// running time ke liye  -----------------------------------------
let timer = false;
let counter = 0;
let settimeStart = null;


//  canvas game ki sara buttonBox esi me store he ------------------------------------

let canvas = document.getElementById("canvas");




// function  ko hm bahar global me esliye call kiya he taki jb mere pade lode ho to gage easy mode se pahle start ho--------------------
gameSelect(9,9,40);


//  gameMode esse hm apne game ki lavel ko change kr kre he --------------------------------

gameModeEl.addEventListener("change", (e) => {
  // console.log(e);
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

// gameMode end. -----------------------


// define:-  ROW,COLS & SIZE:- canvas me kitne number of rows and cols and unke size hm diside kr rahe he --------------------

function gameSelect(ROWS, COLS, SIZE) {
  let restartButton = document.getElementById("restart");

 

  let cells;
  let failedBombKey;
  let revealedKeys;
  let flaggedKeys;
  let map;

  
  //  es function ko sumjhna he abhi -------------------------------------
  function toKey(row, col) {
    return row + "-" + col;
  }

  //  es function ko sumjhna he abhi -------------------------------------

  function fromKey(key) {
    return key.split("-").map(Number);
  }


  //  createButtons function se hm apne canvas ke aonder button creat kre rahe ---------------------
  function createButtons() {
    canvas.style.width = ROWS * SIZE + "px";  // set the Row width-----------
    canvas.style.height = COLS * SIZE + "px"; // set the Row height----------
    for (let i = 0; i < ROWS; i++) {   // rows pe ek ek kr travel ck rahe he -----------
      for (let j = 0; j < COLS; j++) {  // cols pe ek ek kr travel ck rahe he -----------

        let cell = document.createElement("button"); // rows & cols pe travel kr ke hm button creat kre rahe he -------


        //  cell ke ander jo button create huaa he use hm style provide krwa rahe he ---------
        cell.style.float = "left";
        cell.style.width = SIZE + "px";
        cell.style.height = SIZE + "px";
        // cell.style.backgroundColor="orangered"
        cell.style.backgroundColor="grey"


        cell.addEventListener("click",()=>{
          addToCartSound.play();
        })
//  cell style end ----------------------------------

// yaha tk code understand 16-11-23 

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
  
    // audio();
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
    addToCartSound.play();
  }

  function updateButtons() {
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        let key = toKey(i, j);
        let cell = cells.get(key);

        cell.style.backgroundColor = "grey";
        cell.style.color = "black";// ----------------
        cell.textContent = "";
        cell.disabled = false;

        let value = map.get(key);
        if (failedBombKey !== null && value === "bomb") {
          cell.disabled = true;
          cell.textContent = "💣";
          bumbBlast.play();
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
      clearTimeout(settimeStart);
      
      
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

