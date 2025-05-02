
const generateButton = document.getElementById('generate-button');
const colorCodeDisplay = document.getElementById('color-code');
const body = document.body; // Get the body element

function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

generateButton.addEventListener('click', () => {
    const newColor = generateRandomColor();
    body.style.backgroundColor = newColor; // Change the body's background color
    colorCodeDisplay.textContent = newColor;
    colorBox.style.backgroundColor = '#f0f0f0'; // Optionally reset the box color
});

// Set an initial background color when the page loads
window.onload = () => {
    const initialColor = generateRandomColor();
    body.style.backgroundColor = initialColor; // Set initial body background
    colorCodeDisplay.textContent = initialColor;
    colorBox.style.backgroundColor = '#f0f0f0'; // Optionally set initial box color
};