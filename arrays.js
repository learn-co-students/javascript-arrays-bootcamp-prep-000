var chocolateBars = ["snickers" , "hundred grand" , "kitkat" , "skittles"]

var destructivelyAddElementToBeginningOfArray = function(arr, newEl){
  arr.unshift(newEl);
  return arr;
}

var addElementToBeginningOfArray = function(arr, newEl){
  return [newEl , ...arr];
}

var destructivelyAddElementToEndOfArray = function(arr, newEl){
  arr.push(newEl);
  return arr;
}

var addElementToEndOfArray = function(arr, newEl){
  return [...arr , newEl];
}

var accessElementInArray = function(arr, index){
  return arr[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function(arr){
  arr.shift();
  return arr;
}

var removeElementFromBeginningOfArray = function(arr){
  return arr.slice(1);
}

var destructivelyRemoveElementFromEndOfArray = function(arr){
  arr.pop();
  return arr;
}

var removeElementFromEndOfArray = function(arr){
  return arr.slice(0, arr.length - 1);
}
