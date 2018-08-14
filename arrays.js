var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles" ]

function destructivelyAddElementToBeginningOfArray(myArray, element) {
  myArray.unshift(element)
  return myArray
}

function addElementToBeginningOfArray(myArray, element) {
  newArray= [element, ...myArray]
  return newArray
}


function destructivelyAddElementToEndOfArray(myArray, element) {
  myArray.push(element)
  return myArray
}

function addElementToEndOfArray(myArray, element) {
  newArray= [...myArray, element]
  return newArray
}

function accessElementInArray(myArray, index) {
  return myArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
   myArray.shift()
   return myArray
}

function removeElementFromBeginningOfArray(myArray) {
  return myArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(myArray){
  myArray.pop()
  return myArray
}

function removeElementFromEndOfArray(myArray) {
  return myArray.slice(0, myArray.length - 1)
}

