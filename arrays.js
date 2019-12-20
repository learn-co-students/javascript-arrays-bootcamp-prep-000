var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray() {
const array1 = [5];
return array1.unshift(4);
}

function destructivelyAddElementToBeginningOfArray () {
 const array2 = [...array1,5];
 return array2;
} 
//Second function is not passing