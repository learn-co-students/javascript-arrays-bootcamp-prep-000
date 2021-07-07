var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (dog, cat){
  return [cat,...dog]
}

function destructivelyAddElementToBeginningOfArray (sun, moon){
  sun.unshift(moon);
    return sun;
}

function addElementToEndOfArray (dog, cat){
  return [...dog, cat]
}

function destructivelyAddElementToEndOfArray (sun, moon){
  sun.push(moon)
  return sun
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (sun, moon){
  sun.shift(moon)
  return sun
}

function removeElementFromBeginningOfArray (sun, moon){
  return sun.slice(1);
}



function destructivelyRemoveElementFromEndOfArray  (sun, moon){
  sun.pop(moon)
  return sun
}

function removeElementFromEndOfArray(sun){
  return sun.slice(0, sun.length - 1);
}
