var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(myArray,firstItem){
  
  return [firstItem, ...myArray]
}
function destructivelyAddElementToBeginningOfArray(myArray,firstItem){
  myArray.unshift(firstItem)
  return myArray
}
function addElementToEndOfArray(myArray,firstItem){
  return [...myArray,firstItem]
}
function destructivelyAddElementToEndOfArray(myArray,firstItem){
  myArray.push(firstItem)
  return myArray
}
function accessElementInArray(myArray,i){
 return myArray[i]
}

function destructivelyRemoveElementFromBeginningOfArray (myArray){
  myArray.shift()
  return myArray
}
function removeElementFromBeginningOfArray(myArray){
var newArray = myArray.slice(1)
return newArray
}

function destructivelyRemoveElementFromEndOfArray (myArray){
  myArray.pop()
  return myArray
}
function removeElementFromEndOfArray(myArray){
 var newArray= myArray.slice(0, myArray.length-1)
  return newArray
}