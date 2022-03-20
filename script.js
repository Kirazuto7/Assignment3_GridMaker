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
    if(numRows === 0){
        alert("Please add a row"); //send alert when there are no rows to delete
    }
    else{
        let gridTableRef = document.getElementById("grid"); //reference table
        gridTableRef.deleteRow(-1); //delete a row from the end of the table
        numRows --; //decrement row count
        if(numRows === 0){ //if you just deleted the last row, reset the column count to 0
            numCols = 0;
        }
    }
}

// Remove a column
function removeC() {
    if(numCols === 0){
        alert("Please add a column"); //send alert when there are no columns to delete
    }
    else{
        let allRows = document.querySelectorAll("tr"); //reference the rows of the table
        for(let i = 0; i < numRows; i++){
            allRows[i].deleteCell(-1); //delete the last cell of each row
        }
        numCols --; //decrement column count
    }
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
    //if no rows exist it displays a message
    if(numRows === 0)
    {
        alert("There are no Cells to clear")
    }
    else
    {
        let td = document.querySelectorAll("td");

        for (let i = 0; i < td.length; i++) {
            td[i].style.backgroundColor = "white";
        }
    }
}