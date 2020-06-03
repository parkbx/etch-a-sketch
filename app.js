// Declare initial variable for isShade, isRandom, and isDefault.
let isShade = false;
let isRandom = false;
let isDefault = true;

// Declare color variables for rgb random generator.
let colorR = 0;
let colorG = 0;
let colorB = 0;

// Declare shade and getID variables.
let shade; 
let getId; 

// Declare resetBtn and add click event listener.
const clearBtn = document.querySelector('.btn-clear');
clearBtn.addEventListener('click', clearGrid);

// Declare setGridBtn and add click event listener.
const setGridBtn = document.querySelector('.btn-setGrid');
setGridBtn.addEventListener('click', setGrid);

// Declare mainContainer.
const mainContainer = document.querySelector('.div-main-container');

// Declare gridContainer and add div-grid-container class.
const gridContainer = document.createElement('div');
gridContainer.classList.add('div-grid-container');

// Append gridContainer to mainContainer.
mainContainer.appendChild(gridContainer);

// Function to create grids that go inside gridContainer.
function createGrids(num) {
    shade = new Array(num * num); // Create an array that would hold Shade(lightness) value for each grid created.

    for (let i = 0; i < num * num; i++) {
        shade[i] = 100; // Store default 100% value of lightness.
        const grid = document.createElement('div');
        grid.classList.add('div-grid');
        grid.setAttribute('id', i.toString()); // Set ID attribute to each grid.
        grid.addEventListener('mouseover', leaveTrail);
        gridContainer.appendChild(grid);
    }
}

// Loading 16x16 grids as default.
document.querySelector('body').addEventListener('load', createGrids(16));

// Function to add class div-grid-hovered to leave trails.
function leaveTrail() {
    getId = this.getAttribute('id'); // Assign ID attribute to getID.
    getId = +getId; // Sets getId as a numeric value.

    if (isRandom) {
        // RGB style - Set random number to color R,G,B then set background color using them.
        colorR = Math.floor(Math.random() * 256 + 1);
        colorG = Math.floor(Math.random() * 256 + 1);
        colorB = Math.floor(Math.random() * 256 + 1);

        this.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
    } else if (isShade) {
        // Shading
        this.style.backgroundColor = `hsl(0, 0%, ${shade[getId]}%)`;
        shade[getId] -= 10; // Reduce lightness by 10%.
    } else if (isDefault) {
        this.style.backgroundColor = '#000000';
    }
}

// Function to set grid by user's input.
function setGrid() {
    let gridDiv = document.querySelector('.div-grid-container');
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.firstChild);
    }
    
    // Get new grid dimension from user using prompt.
    let gridDefined = parseInt(prompt('How many squares per side? (max = 100)'));
    
    // Checking to see if user enters number and if the number is greater than 0 and less than 100.
    // If user enters integer number, use that number to set new grids.
    // If any of the conditions are true, a prompt for input will be triggered until conditions are false.
    while (!Number.isInteger(gridDefined) || gridDefined > 100 || gridDefined < 0) {
        gridDefined = parseInt(prompt('Please enter a positive number. \nHow many squares per side? (max = 100)'));
    }
    
    // Setting the grid column and row CSS according to user input.
    gridDiv.style.gridTemplateColumns = 'repeat(' + gridDefined + ', 1fr)';
    gridDiv.style.gridTemplateRows = 'repeat(' + gridDefined + ', 1fr)';
    
    // Use number to set the grids.
    createGrids(gridDefined);
    clearGrid();
}

// Function to clear the grid.
function clearGrid() {
    // Select grid with .div-grid-hovered and remove that class for each grid.
    const gridToRemove = document.querySelectorAll('.div-grid');
    gridToRemove.forEach(grid => {
        grid.style.backgroundColor = 'hsl(0, 0%, 100%)';
    });
}

// Toggle Rnadom mode
let btnRandom = document.querySelector('.btn-ranColor');
btnRandom.addEventListener('click', () => {
    if (isRandom) {
        isRandom = false;
        isDefault = true;
    } else {
        isRandom = true;
        isShade = false;
        isDefault = false;
    }
});


// Toggle Shading mode
let btnShade = document.querySelector('.btn-shading');
btnShade.addEventListener('click', () => {
    if (isShade) {
        btnShade.classList.remove('button-selected');
        isShade = false;
        isDefault = true;
    } else {
        btnShade.classList.add('button-selected');
        isShade = true;
        isRandom = false;
        isDefault = false;
    }
});

// Toggle Default mode
let btnDefault = document.querySelector('.btn-default');
btnDefault.addEventListener('click', () => {
    isShade = false;
    isRandom = false;
    isDefault = true;
});