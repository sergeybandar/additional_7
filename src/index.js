module.exports = function solveSudoku(matrix) 
{var p = []
 var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

 for (var row = 0; row < 9; row++) {
 for (var col = 0; col < 9; col++) {

 if ( matrix[row][col] == 0 ) {

 var PositRow = Math.floor(row / 3) * 3;
 var PositCol = Math.floor(col / 3) * 3;

 for (var i = 0; i < 9; i++) {
 p.push(matrix[PositRow + i % 3][PositCol + Math.floor(i / 3)]);
 p.push(matrix[row][i]);
 p.push(matrix[i][col]);
 }

 p.filter(number => number > 0);
 var zer = numbers.filter(number => p.indexOf(number) < 0);

 for (var i = 0; i < zer.length; i++) {
 matrix[row][col] = zer[i];
 if (solveSudoku(matrix)) {
 return solveSudoku(matrix);
 }
 }

 matrix[row][col] = 0;
 return !matrix;
 }
 }
 }
 return matrix;

}
