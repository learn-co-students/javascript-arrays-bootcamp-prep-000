chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(candy, bars){
  bars = [bars, ...candy];
  return bars
}

function destructivelyAddElementToBeginningOfArray(candyString, candy){
  candyString.unshift(candy)
  return candyString
}



function addElementToEndOfArray(array, element){
  array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array
}

function accessElementInArray(array,one){
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
 return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, -1)
}