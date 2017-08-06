var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(myArray, element){
  var myArrayTwo = [element, ...myArray]
  return myArrayTwo
}

function destructivelyAddElementToBeginningOfArray(myArray, element){
  myArray.unshift(element)
  return myArray
}
function addElementToEndOfArray(myArray, element){
  var myArrayTwo = [...myArray, element]
  return myArrayTwo
}

function destructivelyAddElementToEndOfArray(myArray, element){
  myArray.push(element)
  return myArray
}

function accessElementInArray(myArray, index){
  return myArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(myArray){
  myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray(myArray){
  myArray = myArray.slice(1)
  return myArray
}
function destructivelyRemoveElementFromEndOfArray(myArray){
  myArray.pop()
  return myArray
}

function removeElementFromEndOfArray(myArray){
  myArray.pop()
  return myArray
}
function test (){
var items = [1,2,3,4,5]
items = [...items.slice(0,2), ...items.slice(3)]
console.log(items)
}
