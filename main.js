const instructions = document.getElementById('instructions');
const gameContainer = document.getElementById('game-container');
const startButton = document.getElementById('start-button');

const player = document.getElementById('player');
const statusDisplay = document.getElementById('status');

let isGreenLight = true; 
let playerPosition = 0; 
const goalPosition = 350; 


function toggleLight() {
  isGreenLight = !isGreenLight;
  statusDisplay.textContent = isGreenLight ? "Green Light" : "Red Light";
  statusDisplay.style.backgroundColor = isGreenLight ? "#0f0" : "#f00";
}


document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowUp') {
    if (!isGreenLight) {
      alert("You have been killed! Game Over")

      resetGame();
    } else {
      playerPosition +=10;
      player.style.bottom = `${playerPosition}px`;

      
      if (playerPosition >= goalPosition) {
        alert("Congratulations! You won!");
        resetGame();
      }
    }
  }
});

// Reset the game
function resetGame() {
  playerPosition = 0;
  player.style.bottom = `${playerPosition}px`;
  isGreenLight = true;
  statusDisplay.textContent = "Green Light";
  statusDisplay.style.backgroundColor = "#0f0";
}

// Change light every 2 seconds
setInterval(toggleLight, 2000);
