// Determine if a 9x9 Sudoku board is valid. A valid 
// Sudoku board (partially filled) must not violate 
// the rules of Sudoku. The sudoku board input is 
// represented by a 2D array containing either string 
// numbers or "." (empty space) as elements. 


function isValidSudoku(board) {
    const seen = new Set();

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const value = board[r][c];
            if (value === ".") continue;

            const rowKey = `row${r}-${value}`;
            const colKey = `col${c}-${value}`;
            const boxKey = `box${Math.floor(r/3)}${Math.floor(c/3)}-${value}`;

            if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                return false; // Duplicate found
            }

            seen.add(rowKey);
            seen.add(colKey);
            seen.add(boxKey);
        }
    }

    return true;
}

// Example usage:
console.log(isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
])); // true
