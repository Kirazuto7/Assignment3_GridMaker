let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    //increase the number of rows
    numRows++;
    //gets the element for table
    let container = document.getElementById("grid");
    //create row element
    let row = document.createElement("tr");
    //create col if there are none
    if (numCols === 0)
    {
        numCols++;
    }
    //add row to grid
    container.appendChild(row);   
    //create columns and add to row
    for(let j = 0; j < numCols;j++)
    {
        let col = document.createElement("td");
        row.appendChild(col);
    } 
    console.log(numRows)
    console.log(numCols)
    console.log('addr')
}

// Add a column
function addC() {
     //increase the number of columns
     
     //create row if there are none
     if (numRows === 0)
    {
        addR();
    }
     else
    {
        //iterate through all rows and create a new col and append to each row
        for (let i = 0; i < numRows; i++)
        {
            let col = document.createElement("td");
            document.querySelectorAll("tr")[i].appendChild(col);
        }
        numCols++;
    }
    
    console.log(numRows)
    console.log(numCols)
    console.log('addc')
}

// Remove a row
function removeR() {
    //exit if no rows
    if (numRows === 0)
    {
        return
    }
    //get table element
    let container = document.getElementById("grid");
    //remove last row
    container.removeChild(container.lastElementChild);
    //reduce number of rows
    numRows--;
    
    if (numRows === 0)
    {
        numCols = 0
    }
    console.log(numRows)
    console.log(numCols)
    console.log('rr')

}

// Remove a column
function removeC() {
    //exit if no cols
    if (numCols === 0)
    {
        return
    }
    //get array of all rows
    let row = document.querySelectorAll("tr");
    for (let i = 0; i < numRows; i++)
        {
            //for each row remove the last col
            row[i].removeChild(row[i].lastElementChild);
        }
    numCols--;
    
    if (numCols === 0)
    {
        numRows = 0
    }
    console.log(numRows)
    console.log(numCols)
    console.log('rc')
}

// Sets global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    //if no rows exit
    if (numRows === 0)
    {
        return
    }
    //get array of all rows
    let row = document.querySelectorAll("tr");
    for (let i = 0; i < numRows; i++)
    {
        //get array of all cols at each row
        let col = row[i].children;
        for(let j = 0; j < numCols;j++)
        {
            //get the color of current cell
            let cellColor = window.getComputedStyle(col[j]).backgroundColor;
            //if cell color is white change to selected color
            if (cellColor == "rgb(255, 255, 255)")
            {
                col[j].style.backgroundColor = colorSelected;
            }
        } 
    }
}

// Fill all cells
function fillAll(){
    //if no rows exit
    if (numRows === 0)
    {
        return
    }
    //get array of all rows
    let row = document.querySelectorAll("tr");
    for (let i = 0; i < numRows; i++)
    {
        //get array of all cols at each row
        let col = row[i].children;
        for(let j = 0; j < numCols;j++)
        {
            //change each cell color to selected color
            col[j].style.backgroundColor = colorSelected;
        } 
    }
}

// Clear all cells
function clearAll(){
    //if no rows exit
    if (numRows === 0)
    {
        return
    }
    //get array of all rows
    let row = document.querySelectorAll("tr");
    for (let i = 0; i < numRows; i++)
    {
        //get array of all cols at each row
        let col = row[i].children;
        for(let j = 0; j < numCols;j++)
        {
            //change each cell color to white
            col[j].style.backgroundColor = 'white';
        } 
    }
}