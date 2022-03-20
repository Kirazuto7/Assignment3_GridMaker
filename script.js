let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    alert("Clicked Add Column"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Sets global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fills a cell with a color when you click on a certain cell of the grid
function fillCell() {

    let cells = document.querySelectorAll("td");
    
    for (let i = 0; i < cells.length; i++)
    {
        cells[i].onclick = function() {
            this.style.backgroundColor = colorSelected;
        }
    }
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    //reset numRows and numCols
    numRows = 0;
    numCols = 0;

    let grid = document.getElementById("grid");

    while(grid.lastElementChild != null)
    {
        grid.removeChild(grid.lastElementChild);
    }
}