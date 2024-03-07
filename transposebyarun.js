// function transpose(matrix) {
//     const rows = matrix.length
//     const cols = matrix[0].length;
//     const grid = [];
//     for (let j = 0; j < cols; j++) {
//         grid[j] = [];
//     }

//     console.log(grid)
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             grid[j][i] = matrix[i][j];
//         }
//     }
//     console.log(grid);
// }

// transpose([[1, 2], [3, 4], [5, 6]])
let n=7;
let a=0;
console.log(a);
let b=1;
console.log(b);
for (let i=2; i<=n; i++){
    let c=a+b;
    a=b;
    b=c;
    console.log(c);
}





