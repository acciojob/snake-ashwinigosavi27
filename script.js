//your code here
// Constants for game configuration
const containerSize = 400; // Size of the game container in pixels
const pixelSize = 10; // Size of each pixel in pixels
const numPixels = containerSize / pixelSize; // Number of pixels in each row/column

// Create the game container element
const gameContainer = document.getElementById("gameContainer");

// Set the width and height of the game container
gameContainer.style.width = `${containerSize}px`;
gameContainer.style.height = `${containerSize}px`;

// Generate the pixels
for (let i = 0; i < numPixels; i++) {
  for (let j = 0; j < numPixels; j++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.id = `pixel${i * numPixels + j + 1}`;
    pixel.style.width = `${pixelSize}px`;
    pixel.style.height = `${pixelSize}px`;
    gameContainer.appendChild(pixel);
  }
}

// Set up the food element
const food = document.createElement("div");
food.className = "food";
food.id = "foodPixel";
food.style.width = `${pixelSize}px`;
food.style.height = `${pixelSize}px`;
gameContainer.appendChild(food);

// Set up the snake body element
const snakeBody = document.createElement("div");
snakeBody.className = "snakeBody";
snakeBody.id = "snakeBodyPixel";
snakeBody.style.width = `${pixelSize}px`;
snakeBody.style.height = `${pixelSize}px`;
gameContainer.appendChild(snakeBody);

// Set up the score board element
const scoreBoard = document.createElement("div");
scoreBoard.className = "scoreBoard";
gameContainer.appendChild(scoreBoard);

// Set initial position of the snake (20th row, 1st column)
let currentRow = 20;
let currentCol = 1;
const initialPixelId = `pixel${currentRow * numPixels + currentCol}`;
const initialPixel = document.getElementById(initialPixelId);
initialPixel.classList.add("snakeBodyPixel");

// Function to move the snake automatically
function moveSnake() {
  // Move the snake to the next position
  currentCol++;

  // Check if the snake has reached the right edge
  if (currentCol > numPixels) {
    currentCol = 1;
  }

  // Remove the class from the previous pixel
  const previousPixelId = `pixel${currentRow * numPixels + currentCol - 1}`;
  const previousPixel = document.getElementById(previousPixelId);
  previousPixel.classList.remove("snakeBodyPixel");

  // Add the class to the new pixel
  const currentPixelId = `pixel${currentRow * numPixels + currentCol}`;
  const currentPixel = document.getElementById(currentPixelId);
  currentPixel.classList.add("snakeBodyPixel");
}

// Start the snake movement
setInterval(moveSnake, 100);
