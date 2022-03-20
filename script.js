let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let gridTableRef = document.getElementById("grid"); //reference to the table
    let newRow = gridTableRef.insertRow(-1); //Insert a row at the end of the table
    let newCell = newRow.insertCell(0); //Insert a cell in the row at the index 0
    numRows ++;

    if(numRows == 1) numCols++; // when adding a row for the first time, a column is also being added

    if(numCols > 1)
    {
        for(let i = 0; i < numCols - 1; i++)
        {
            let newColumn = newRow.insertCell(-1);
        }
    }
}

// Add a column
function addC() {
    let allRows = document.querySelectorAll("tr");

    for(let i = 0; i < numRows; i++)
    {
        let newColumn = allRows[i].insertCell(0);
    }
    numCols++;
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
    alert("Clicked Clear All"); // Replace this line with your code.
}