//define an array
var chocolateBars = [snickers, hundred grand, kitkat , skittles];

//add element to the beginning of the array but not mutates it
function addElementToBeginningOfArray(array,element) {
          return [...element , array];
}

//add element to the beginning of the array and mutates the original array
function destructivelyAddElementToBeginningOfArray(array,element) {
          return array.unshift(element);
}

//add element to the end of the array but not mutates it
function addElementToEndOfArray(array,element) {
          return [array , ...element];
}

//add element to the end of the array and mutates the original array
function destructivelyAddElementToEndOfArray(array,element) {
          return array.push(element);
}

//returns the element in the index place
function accessElementInArray(array,index) {
          return array[index];
}

//remove the first element in the array and mutates the original array
function destructivelyRemoveElementFromBeginningOfArray(array) {
          return array.shift();
}

//remove the first element in the array but not mutates the original array
function removeElementFromBeginningOfArray(array) {
          return array.slice(1);
}

//remove the last element in the array and mutates the original array
function destructivelyRemoveElementFromEndOfArray(array) {
          return array.pop();
}

//remove the last element in the array but not mutates the original array
function removeElementFromEndOfArray(array) {
          return array.slice(array.length-1);
}


