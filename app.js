// Declare resetBtn.
const resetBtn = document.querySelector('.btn-reset');
resetBtn.addEventListener('click', resetGrid);

// Declare mainContainer.
const mainContainer = document.querySelector('.div-main-container');

// Declare gridContainer and add div-grid-container class.
const gridContainer = document.createElement('div');
gridContainer.classList.add('div-grid-container');

// Append gridContainer to mainContainer.
mainContainer.appendChild(gridContainer);

// Create grids that would go inside gridContainer.
for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    grid.classList.add('div-grid');
    gridContainer.appendChild(grid);
}

// Add event listener to grids.
const grids = document.querySelectorAll('.div-grid');
grids.forEach(grid => grid.addEventListener('mouseenter', leaveTrail));

// Function to add class div-grid-hovered to leave trails
function leaveTrail() {
    this.classList.add('div-grid-hovered');
}

// Function reset the grid by removing .div-grid-hovered CSS.
function resetGrid() {
    // Select grid with .div-grid-hovered and remove that class for each grid.
    const gridToRemove = document.querySelectorAll('.div-grid-hovered');
    gridToRemove.forEach(grid => grid.classList.remove('div-grid-hovered'));

    // Get new grid dimension from user using prompt.
    let gridDefined = parseInt(prompt('How many squares per side?'));

    if (!Number.isInteger(gridDefined)) {
        gridDefined = parseInt(prompt('How many squares per side?'));
    } else {
        // Use number to set the grids.
    }



}