// Declare initial variable for isShade and isRandom
let isShade = false;
let isRandom = false;
let isDefault = true;

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
    for (let i = 0; i < num * num; i++) {
        const grid = document.createElement('div');
        grid.classList.add('div-grid');
        grid.addEventListener('mouseover', leaveTrail);
        gridContainer.appendChild(grid);
    }
}

// Loading 16x16 grids as default.
document.querySelector('body').addEventListener('load', createGrids(16));

// Function to add class div-grid-hovered to leave trails
function leaveTrail() {
    if (isRandom) {
        // RGB style
        this.style.backgroundColor = 'yellow';
    } else if (isShade) {
        // Shading
        this.style.backgroundColor = 'red';
    } else if (isDefault) {
        this.style.backgroundColor = '#808080';
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
    
    // Checking to see if user enters number and if the number is less than 100.
    // If user enters integer number, use that number to set new grids.
    while (!Number.isInteger(gridDefined) || gridDefined > 100) {
        gridDefined = parseInt(prompt('How many squares per side? (max = 100)'));
    }
    
    // Setting the grid column and row CSS according to user input.
    gridDiv.style.gridTemplateColumns = 'repeat(' + gridDefined + ', auto)';
    gridDiv.style.gridTemplateRows = 'repeat(' + gridDefined + ', auto)';
    
    // Use number to set the grids.
    createGrids(gridDefined);
    clearGrid();
}

// Function to clear the grid by removing .div-grid-hovered CSS.
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
    } else {
        isRandom = true;
        isShade = false;
        isDefault = false;
    }
    console.log("isShade = " + isShade);
    console.log("isRandom = " + isRandom);

});


// Toggle Shading mode
let btnShade = document.querySelector('.btn-shading');
btnShade.addEventListener('click', () => {
    if (isShade) {
        isShade = false;
    } else {
        isShade = true;
        isRandom = false;
        isDefault = false;
    }
    console.log("isShade = " + isShade);
    console.log("isRandom = " + isRandom);

});

// Toggle Default mode
let btnDefault = document.querySelector('.btn-default');
btnDefault.addEventListener('click', () => {
    isShade = false;
    isRandom = false;
    isDefault = true;

    console.log("isShade = " + isShade);
    console.log("isRandom = " + isRandom);

});