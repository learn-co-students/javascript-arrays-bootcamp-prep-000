var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
   var newarray1 = [element, ...array];
   return newarray1 ;
}

function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element);
   return array
}

function addElementToEndOfArray(array, element){
   var newarray2 = [...array, element];
   return newarray2 ;
}

function destructivelyAddElementToEndOfArray(array, element){
   array.push(element);
   return array;
}

 function accessElementInArray(array, index){
    return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift();
   return array;
}

function removeElementFromBeginningOfArray(array){
   var newarray3 = array.slice(1);
   return newarray3;
}

function destructivelyRemoveElementFromEndOfArray(array){
   array.pop();
   return array;
}

function removeElementFromEndOfArray(array){
   var newarray4 = array.slice(0,array.length - 1);
   return newarray4;
}

// // ["snickers", "hundred grand", "kitkat", "skittles"];
// console.log(1, addElementToBeginningOfArray(chocolateBars, "nhinh"));
// console.log(2, destructivelyAddElementToBeginningOfArray(chocolateBars, "nhinh"));
// console.log(3, addElementToEndOfArray(chocolateBars, "nhinh"));
// console.log(4, destructivelyAddElementToEndOfArray(chocolateBars, "nhinh"));
// console.log(5, removeElementFromBeginningOfArray(chocolateBars));
// console.log(6, destructivelyRemoveElementFromBeginningOfArray(chocolateBars));
// console.log(7, removeElementFromBeginningOfArray(chocolateBars));
// console.log(8, destructivelyRemoveElementFromEndOfArray(chocolateBars));
