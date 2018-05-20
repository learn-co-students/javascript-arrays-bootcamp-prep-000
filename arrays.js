var chocolateBars = ["snickers", 
                      "hundred grand",
                      "kitkat",
                    "skittles"];

function addElementToBeginningOfArray(arr, el){
 // var newArr = arr;
  arr.unshift(el);
  return arr;
}

function destructivelyAddElementToBeginningOfArray (arr, el){
  arr.unshift(el);
  return arr; 
}

function addElementToEndOfArray(arr, el){
  var newArr = arr;
  newArr.push(el);
  return newArr;
}

function destructivelyAddElementToEndOfArray (arr, el){
  arr.push(el);
  return arr; 
}

function accessElementInArray (arr, i) {
  return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray (arr) {
  var newArr = arr.splice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  arr = arr.slice(0, arr.length - 1);
  return arr;
}