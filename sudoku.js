// Checks if the number we trying to update in the board is valid or not
function possibilites(grid, row, col, n) {
    for (let i = 0; i < 9; i++) // checks if the value of 'n' can be updated in the row
    {
        if (grid[row][i] == n) {
            return false // if value is not valid to be updated 
        }
    }
    for (let j = 0; j < 9; j++) // checks if the value of 'n' can be updated in the coloumn
    {
        if (grid[j][col] == n) {
            return false // if value is not valid to be updated 
        }
    }
    let a = Math.sqrt(grid.length); // to find the size of sub grid
    let row0 = Math.floor(row / a) * a // defines the start point for the row of sub grid
    let col0 = Math.floor(col / a) * a // defines the start point for the col of sub grid
    for (let r = row0; r < row0 + (a - 1); r++) {
        for (let c = col0; c < col0 + (a - 1); c++) // checks if the value is valid to be updated in the sub grid
        {
            if (grid[r][c] == n) {
                return false // if not valid
            }
        }
    }
    return true // if the value is valid to be updated
}

function solve(grid) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (grid[i][j] == '.') {
                for (let k = 1; k <= 9; k++) // updates the values of numbers to update
                {
                    if (possibilites(grid, i, j, k)) // enters if the possibilities function returns true
                    {
                        grid[i][j] = k; // updates the value in the grid
                        if (solve(grid)) // calls the function and updates the new grid value // recursion occurs until the grid is solved
                        {
                            return true; //if the grid is solved
                        } else {
                            grid[i][j] = '.'; // backtracks the value if it can't be updated
                        }
                    }
                }
                return false; // if the grid is not solved
            }
        }
    }
    return true; // if grid is solved
}
grid = [
    ['-', '9', '.', '.', '4', '2', '1', '3', '6'],
    ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
    ['.', '.', '.', '5', '8', '1', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
    ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
    ['6', '.', '2', '.', '.', '.', '3', '7', '.'],
    ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
    ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
    ['3', '.', '.', '.', '9', '.', '.', '.', '.'],
];
console.log(solve(grid))
console.log(grid)