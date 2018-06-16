var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  var myArray = [1];
  return ["foo", ...myArray];
}  

function destructivelyAddElementToBeginningOfArray (){
  var myArray = [1];
  x = 'foo'
  myArray = [x, ...myArray];
  return myArray
}

function addElementToEndOfArray (){
  var myArray = [1];
  return [...myArray,"foo"];
}

function destructivelyAddElementToEndOfArray (){
  var myArray = [1];
  myArray = [...myArray,"foo"];
  return myArray
}

function accessElementInArray (){
  myArray = [1,2,3]
  return (myArray [2])
}

function destructivelyRemoveElementFromBeginningOfArray(){
   myArray = [1,2,3]
   myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray(){
  myArray = [1,2,3]
  return myArray.slice (1)
}

function destructivelyRemoveElementFromEndOfArray(){
  myArray = [1,2,3]
  myArray.pop()
  return myArray
}

function removeElementFromEndOfArray(){
   myArray = [1,2,3]
   return myArray.slice (0, myArray.length - 1)
}




















