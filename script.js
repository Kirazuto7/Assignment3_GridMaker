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

// Fill all uncolored cells
function fillU(){
    //if no rows send alert
    if (numRows === 0)
    {
        alert("There are no cells to color");
    }
    //get array of all cells
    let cells = document.querySelectorAll("td");
    for(let i = 0; i < cells.length; i++)
    {
        //get the color of current cell
        let cellColor = window.getComputedStyle(cells[i]).backgroundColor;
        //if cell color is white change to selected color
        if (cellColor == "rgb(255, 255, 255)")
        {
            cells[i].style.backgroundColor = colorSelected;
        }
    } 
    
}

// Fill all cells
function fillAll(){
    //if no rows send alert
    if (numRows === 0)
    {
        alert("There are no cells to color");
    }
    //get array of all cells
    let cells = document.querySelectorAll("td");
    for(let i = 0; i < cells.length; i++)
    {   
        //change color to selected
        cells[i].style.backgroundColor = colorSelected;
    } 
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}