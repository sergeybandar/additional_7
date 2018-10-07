module.exports = function solveSudoku(matrix) 
{var t = []
 var num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 var mas=new Array;
 mas=matrix;
 for (var row = 0; row < 9; row++) {
 for (var col = 0; col < 9; col++) {

 if ( mas[row][col] == 0 ) {

 var PositRow = Math.floor(row / 3) * 3;
 var PositCol = Math.floor(col / 3) * 3;

 for (var i = 0; i < 9; i++) {
 t.push(mas[PositRow + i % 3][PositCol + Math.floor(i / 3)]);
 t.push(mas[row][i]);
 t.push(mas[i][col]);
 }

 t.filter(num => num > 0);
 var zer = num.filter(num => t.indexOf(num) < 0);

 for (var i = 0; i < zer.length; i++) {
 mas[row][col] = zer[i];
 if (solveSudoku(mas)) {
 return solveSudoku(mas);
 }
 }

 mas[row][col] = 0;
 return !mas;
 }
 }
 }
 return mas;

}
