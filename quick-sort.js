/*jshint esversion: 6 */

// let myArray = [9,2,5,6,4,3,7,10,1,8];
// let myArray = [];
let myArray = [1];
// let myArray = [5,3];

function quickSort(myArray) {
  var pivot = myArray[0];
  var left = [];
  var right = [];
  if (myArray.length === 0) {
    return myArray;
  }
  for (var i = 1; i < myArray.length; i++) {
    if(myArray[i] < pivot) {
      left.push(myArray[i]);
      // console.log('left', myArray);
    } else {
      right.push(myArray[i]);
      // console.log('right', myArray);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(myArray));
// module.exports = quickSort;