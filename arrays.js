var chocolateBars=['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(myArray, myElement){
  var newArray=[myElement, ...myArray]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(myArray, myElement){
  myArray.unshift(myElement)
  return myArray
}

function addElementToEndOfArray(myArray, myElement){
  var newArray=[...myArray, myElement]
  return newArray
}

function destructivelyAddElementToEndOfArray(myArray, myElement){
  myArray.push(myElement)
  return myArray
}

function accessElementInArray(myArray, myIndex){
  return myArray[myIndex]
}

function destructivelyRemoveElementFromBeginningOfArray(myArray){
  myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray(myArray){
  return myArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(myArray){
  myArray.pop()
  return myArray
}

function removeElementFromEndOfArray(myArray){
  var newArray=myArray.slice(0,myArray.length-1)
  return newArray
}
