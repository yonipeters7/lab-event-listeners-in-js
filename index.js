// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}


// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressed = event.key;
  const keyDisplayElement = document.getElementById('keyPressDisplay');
  if (keyDisplayElement) {
    keyDisplayElement.textContent = `Key Pressed: ${keyPressed}`;
  }
}

// Process Text Input
function displayUserInput() {
  const userInput = document.getElementById('textInput').value;
  const displayElement = document.getElementById('textInputDisplay');

  if (userInput.trim() === '') {
    // If input is empty, show a default message
    displayElement.textContent = 'Your input will be displayed here.';
  } else {
    // Otherwise, display whatever the user typed
    displayElement.textContent = userInput;
  }
}



// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}