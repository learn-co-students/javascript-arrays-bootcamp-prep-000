//Problem 1
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
//Problem 2 
function addElementToBeginningOfArray(myArray, myElement){
  myArray = [myElement, ...myArray]
  return myArray
}

//problem 3
function destructivelyAddElementToBeginningOfArray(myArray, myElement){
  myArray.unshift(myElement)
  return myArray
}
//problem 4
function addElementToEndOfArray(myArray, myElement){
  myArray = [...myArray, myElement]
  return myArray
}

//problem 5
function destructivelyAddElementToEndOfArray(myArray, myElement){
  myArray.push(myElement)
  return myArray
}

//Problem 6
function accessElementInArray(myArray, elementIndex){
  return (myArray[elementIndex])
}
//problem 7
function destructivelyRemoveElementFromBeginningOfArray(myArray){
  myArray.shift
  return myArray
}
//Problem 8
function removeElementFromBeginningOfArray(myArray){
  myNewArray= myArray.slice(1)
}
//Problem 9
function destructivelyRemoveElementFromEndOfArray(myArray){
  myArray.pop()
  return myArray
}
//problem 10
function removeElementFromEndofArray(myArray){
  myNewArray.slice(0, myArray.length -1)
  return myNewArray
}
