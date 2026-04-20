const generateBtn = document.getElementById('generate-btn');
const paletteContainer = document.querySelector('.palette-container');

generateBtn.addEventListener('click', generatePalette);

function generatePalette() {
    const colors = [];
    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        colors.push(color);
    }
    updatePaletteDisplay(colors);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updatePaletteDisplay(colors) {
    const colorBoxes = document.querySelectorAll('.color-box');

    colorBoxes.forEach((box, index) => {
        const color = colors[index];

        const colorDiv = box.querySelector('.color');   // ✅ FIXED
        const hexValue = box.querySelector('.color-name');

        colorDiv.style.backgroundColor = color;
        hexValue.textContent = color;
    });
}