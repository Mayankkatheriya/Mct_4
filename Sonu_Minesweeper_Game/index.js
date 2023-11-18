// In these lines, we are selecting HTML elements using their IDs or classes. These elements are likely part of the user interface for the game.-------------------
const timeCountEl = document.querySelector("#timeCount");

const gameModeEl = document.querySelector("#gameMode");

const reTryEl = document.querySelector("#reTry");

const upCoverEl = document.querySelector(".upCover");
const gameCoverOpenEl = document.querySelector(".gameCoverOpen");
const downCoverEl = document.querySelector(".downCover");



// Here, audio elements are created for game sounds. addToCartSound and bumbBlast are initialized with audio files and preloaded for faster playback.

const addToCartSound = new Audio("Asset/game-ball-tap.mp3");
addToCartSound.preload = "auto";
const bumbBlast = new Audio("Asset/mixkit-clear.wav");
bumbBlast.preload = "auto";
//  for audio end 



// When the game cover is clicked, this event listener triggers animations to reveal the game and plays a sound.
gameCoverOpenEl.addEventListener("click", (e) => {
  upCoverEl.style.height = "0%";
  upCoverEl.style.transition = "all 1.2s linear";
  //  for downCoverEl
  downCoverEl.style.height = "0%";
  downCoverEl.style.transition = "all 1.2s linear";

  gameCoverOpenEl.style.display = "none";
  gameCoverOpenEl.style.transition = "all 0.2s linear";
  addToCartSound.play();

 
});

// // When the game cover is clicked, this event listener triggers animations to reveal the game and plays a sound. end



// Clicking the retry button resets the game by clearing the canvas and starting a new game with the specified parameters

reTryEl.addEventListener("click", () => {
  canvas.innerHTML = "";
  gameSelect(9, 9, 40);
  gameModeEl.selectedIndex = 0;
  console.log("d");
  // audio();

  addToCartSound.play();
});

// Clicking the retry button resets the game by clearing the canvas and starting a new game with the specified parameters end 

// Variables to keep track of the game timer are initialized.-----------
let timer = false;
let counter = 0;
let settimeStart = null;

//  canvas game ki sara buttonBox esi me store he ------------------------------------

let canvas = document.getElementById("canvas");

// The game is initially set up with a 9x9 grid and 40 bombs.-------------
gameSelect(9, 9, 40);

// An event listener is added to the game mode dropdown. Based on the selected mode (easy, medium, or hard), the game grid is reset with different parameters.------------------

gameModeEl.addEventListener("change", (e) => {
  // console.log(e);
  if (e.target.value == "easy") {
    canvas.innerHTML = "";
    gameSelect(9, 9, 40);
  } else if (e.target.value == "medium") {
    canvas.innerHTML = "";
    gameSelect(18, 14, 25);
  } else if (e.target.value == "hard") {
    canvas.innerHTML = "";
    gameSelect(24, 20, 20);
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

// Function toKey takes two parameters: row and col -------------
  function toKey(row, col) {
      // Concatenate the row and col values with a hyphen in between and return the result ----------
    return row + "-" + col;
  }


// Function fromKey takes a parameter: key ---------------
  function fromKey(key) {
     // Split the key string at the hyphen, creating an array of substrings -------------
  // Map over the array and convert each substring to a number, then return the resulting array ------------
    return key.split("-").map(Number);
  }

  //  createButtons function se hm apne canvas ke aonder button creat kre rahe ---------------------
  function createButtons() {
    canvas.style.width = ROWS * SIZE + "px"; // set the Row width-----------
    canvas.style.height = COLS * SIZE + "px"; // set the Row height----------

    // Loop through each row --------------

    for (let i = 0; i < ROWS; i++) {
      // Loop through each column --------------
      for (let j = 0; j < COLS; j++) {
  
            // Create a button element for each cell in the grid -------------
        let cell = document.createElement("button"); // rows & cols pe travel kr ke hm button creat kre rahe he -------

        //  cell ke ander jo button create huaa he use hm style provide krwa rahe he ---------
        cell.style.float = "left";
        cell.style.width = SIZE + "px";
        cell.style.height = SIZE + "px";
        // cell.style.backgroundColor="orangered"
        cell.style.backgroundColor = "grey";


         // Add a click event listener to play a sound when the button is clicked -----------------------
        cell.addEventListener("click", () => {
          addToCartSound.play();
        });
       
  // Add a context menu event listener to handle right-clicks -------------
        cell.oncontextmenu = (e) => {
          if (failedBombKey !== null) {
            return;
          }
          // Prevent the default context menu from appearing -----------
          e.preventDefault();
          toggleFlag(key);
          updateButtons();
        };

         // Add a click event listener to handle left-clicks-----------------------
        cell.onclick = (e) => {
          //  // Check if a bomb has already been revealed -----------
          if (failedBombKey !== null) {
            return;
          }
           // Check if the cell is flagged ----------------
          if (flaggedKeys.has(key)) {
            return;
          }

          // If not flagged, reveal the cell and update the buttons --------------
          revealCell(key);
          updateButtons();
        };

        // Append the button to the canvas element ------------
        canvas.appendChild(cell);

           // Generate a unique key for the cell based on its row and column --------------
        let key = toKey(i, j);

        // Store the button element in a Map with the key ------------------
        cells.set(key, cell);
      }
    }
    // Add a click event listener to the restart button to start a new game ------------
    restartButton.onclick = startGame;

  }

  function startGame() {
    // running time ke liye
    counter = 0; // Reset the counter to 0
    timer = false;
    timeCountEl.innerText = "000";
    clearTimeout(settimeStart);  // Clear any existing timeout -------

    // running time end

    failedBombKey = null;  // Reset the failedBombKey to null 
    revealedKeys = new Set(); // Create a new Set for revealedKeys
    flaggedKeys = new Set(); // Create a new Set for flaggedKeys
    map = generateMap(generateBombs()); // Generate a new game map with bombs

     // If cells already exist -------------
    if (cells) {
      // Update the buttons based on the new game state -------------
      updateButtons();
    } else {  // If cells don't exist ------------
      cells = new Map(); // Create a new Map for cells ------------
      createButtons(); // Create buttons for the new game -----------
    }
    addToCartSound.play(); // Play the addToCartSound audio ------------
  }

  function updateButtons() {
     // Iterate over each row ----------
    for (let i = 0; i < ROWS; i++) {
      // Iterate over each column ------------
      for (let j = 0; j < COLS; j++) {
        let key = toKey(i, j); // Generate a key using the toKey function based on the current row and column 
        let cell = cells.get(key); // Get the button element associated with the current key from the cells Map

        cell.style.backgroundColor = "grey";
        cell.style.color = "black"; // ----------------
        cell.textContent = ""; // Clear the text content of the cell
        cell.disabled = false;

        let value = map.get(key);  // Get the value of the current cell from the map

        // Check if the game has ended due to a bomb in this cell --------------------
        if (failedBombKey !== null && value === "bomb") {
          cell.disabled = true;  // Disable the cell
          cell.textContent = "💣";
          bumbBlast.play(); // Play a blast sound
          if (key === failedBombKey) {
            cell.style.backgroundColor = "red";
          }
        } else if (revealedKeys.has(key)) {
          cell.disabled = true;
          if (value === undefined) {
            // empty
          } else if (value === 1) {
            cell.textContent = "1";
            cell.style.color = "aqua";
          } else if (value === 2) {
            cell.textContent = "2";
            cell.style.color = "orangered";
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
     // Check if the game has ended -------------
    if (failedBombKey !== null) {
      canvas.style.pointerEvents = "none"; // Disable further pointer events on the canvas
      restartButton.style.display = "block"; // Display the restart button
      clearTimeout(settimeStart); // Clear any existing timeout
    } else {
          // If the game is still ongoing
      canvas.style.pointerEvents = ""; // Enable pointer events on the canvas
      restartButton.style.display = ""; // Hide the restart button
    }
  }

  function toggleFlag(key) {
     // Check if the key is already in the flaggedKeys Set ------
    if (flaggedKeys.has(key)) {
      // If the key is already flagged, remove it from the flaggedKeys Set -----------
      flaggedKeys.delete(key);
    } else {
      // If the key is not flagged, add it to the flaggedKeys Set --------------
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
    // Extract row and column from the key using the fromKey function -----------
    let [row, col] = fromKey(key);
      // Define relative positions of neighboring cells -----------
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
    // Calculate the number of bombs based on the square root of the total number of cells ----------
    let count = Math.round(Math.sqrt(ROWS * COLS));
    // Initialize an array to store bomb keys ------------
    let bombs = [];
     // Initialize an array to store all possible keys in the game grid --------------
    let allKeys = [];
    // Populate the allKeys array with all possible keys in the game grid
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        allKeys.push(toKey(i, j));
      }
    }
    // Randomly shuffle the allKeys array using a coin flip (random sorting) ------------
    allKeys.sort(() => {
      let coinFlip = Math.random() > 0.5;
      return coinFlip ? 1 : -1;
    });
    // Select the first 'count' keys from the shuffled array as bomb keys ------------
    return allKeys.slice(0, count);
  }

  function generateMap(seedBombs) {
     // Initialize an empty map to represent the game grid ------------
    let map = new Map();
    // Helper function to increment the danger count of a neighboring cell ------------
    function incrementDanger(neighborKey) {
       // If the neighborKey is not in the map, set its value to 1 --------------- 
      if (!map.has(neighborKey)) {
        map.set(neighborKey, 1);
      } else {
        // If the neighborKey is not a bomb, increment its value by 1 -------------
        let oldVal = map.get(neighborKey);
        if (oldVal !== "bomb") {
          map.set(neighborKey, oldVal + 1);
        }
      }
    }

     // Iterate through each seedBomb (cell with a bomb) -------------
    for (let key of seedBombs) {
       // Set the value of the cell with a bomb to "bomb" -----------
      map.set(key, "bomb");
      for (let neighborKey of getNeighbors(key)) {
        incrementDanger(neighborKey);
      }
    }
    return map;
  }

  startGame();


  // When the canvas is clicked, the timer starts.-----------------
  canvas.addEventListener("click", () => {
    if (timer == false) {
      timer = true;
      timeCountStatr();
    }
  });


  // This function is called to update and display the game timer. It uses setTimeout for a countdown effect.-------------
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
