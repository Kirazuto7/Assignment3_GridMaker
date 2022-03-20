let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    console.log("current row count:");
    console.log(numRows);
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
    console.log("new row count:");
    console.log(numRows);
}

// Add a column
function addC() {
    console.log("current col count:");
    console.log(numCols);
    let allRows = document.querySelectorAll("tr");

    for(let i = 0; i < numRows; i++)
    {
        let newColumn = allRows[i].insertCell(0);
    }
    numCols++;
    
    console.log("new col count:");
    console.log(numCols);
}

// Remove a row
function removeR() {
    console.log("current row count:");
    console.log(numRows);
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
    console.log("new row count:");
    console.log(numRows);
}

// Remove a column
function removeC() {
    console.log("current col count:");
    console.log(numCols);
    if(numCols === 0){
        alert("Please add a column"); //send alert when there are no columns to delete
    }
    else{
        let allRows = document.querySelectorAll("tr"); //reference the rows of the table
        for(let i = 0; i < numRows; i++){
            allRows[i].deleteCell(-1); //delete the last cell of each row
        }
        numCols --; //decrement column count
        if(numCols === 0){ //if you just deleted the last column, reset the row count to 0
            numRows = 0;
        }
    }
    console.log("new col count:");
    console.log(numCols);
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