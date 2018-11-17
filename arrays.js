//this defines an array chocolateBars
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//this defines a function which adds an element to an array and leaves the original array untouched
function addElementToBeginningOfArray(myArray, element){
  var newArray = [element, ...myArray]
  return newArray
}

//this defines a function which adds an element to an array and changes the original array
function destructivelyAddElementToBeginningOfArray(myArray, element){
  myArray.unshift(element)
  return myArray
}

//this defines a function which adds an element to the end of an array and leaves the original array untouched
function addElementToEndOfArray(myArray, element){
  var newArray = [...myArray, element]
  return newArray
}

//this defines an array which adds an element to the end of an array and changes the original array
function destructivelyAddElementToEndOfArray(myArray, element){
  myArray.push(element)
  return myArray
}

//this defines a function which returns an element in an array given the index
function accessElementInArray(myArray, index){
  return myArray[index]
}

//this defines a function which removes an element from the beginning of an array and changes the original array
function destructivelyRemoveElementFromBeginningOfArray(myArray){
  myArray.shift()
  return myArray
}

//this defines a function which removes an element from the beginning of an array and leaves the original array untouched
function removeElementFromBeginningOfArray(myArray){
  var newArray = myArray.slice(1)
  return newArray
}

//this defines a function which removes an element from the end of an array and changes the original array
function destructivelyRemoveElementFromEndOfArray(myArray){
  myArray.pop()
  return myArray
}
//this defines a function which removes an element from the end of an array and leaves the original array untouched
function removeElementFromEndOfArray(myArray){
  var newArray = myArray.slice(0, myArray.length - 1)
  return newArray
}
