//TODO 1: 
//First Approach
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// Second Approach
// var chocolateBars = new Array();
// chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// Confirm Array was created. 
console.log(chocolateBars);

//TODO 2: 
function addElementToBeginningOfArray(array1, elem1) {
var array = [elem1, ...array1];
console.log("New array is: " + array);
return array;
}

function destructivelyAddElementToBeginningOfArray(array2, elem2) {
  array2.unshift(elem2); 
  return array2;
}

var array1 = ["one", "two", 3, "four"];
var array2 = ["five", "six", 7, "sticks"];

console.log("Initial arrays are: array1: " + array1 +" and array 2: " +  array2);

console.log(addElementToBeginningOfArray(array1, "hello!"));
console.log(destructivelyAddElementToBeginningOfArray(array2, "hello!"));
console.log("Final arrays are array1:" + array1 +  " and array2: " + array2);

//TODO 3: 
function addElementToEndOfArray(array, elem){
  var newArray = [...array, elem];
  console.log(newArray);
  console.log(array);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, elem){
    array.push(elem);
    return array;
}

addElementToEndOfArray(array1, "seven");
destructivelyAddElementToEndOfArray(array2, 8);


//TODO 4:
function accessElementInArray(array, index){
  return array[index];
}

//Test that function works:
var example = ["cat", "dog", "fish"];
console.log(accessElementInArray(example, 1));

//TODO 5: 
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

// //Test that function works:
var example = ["horse","cat", "dog", "fish"];
console.log(destructivelyRemoveElementFromBeginningOfArray(example));

//TODO 6:
function removeElementFromBeginningOfArray(array){
  array2 = array.slice(1);
  return array2;
}

var example = ["horse","cat", "dog", "fish", "bird", "dragon"];
console.log(removeElementFromBeginningOfArray(example));

//TODO 7:
function destructivelyRemoveElementFromEndOfArray(array){
  console.log(array.pop());
  return array;
}

var example = ["horse","cat", "dog", "fish", "bird", "dragon"];
console.log(destructivelyRemoveElementFromEndOfArray(example));

//TODO 8:
function removeElementFromEndOfArray(array){
  var result = array.slice(0,array.length-1);
  return result;
}

var example = ["horse","cat", "dog", "fish", "bird", "dragon"];
console.log(removeElementFromEndOfArray(example));