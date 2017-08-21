var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(myArray, foo) {
  myArray = [foo, ...myArray]
  return myArray
}

function destructivelyAddElementToBeginningOfArray(myArray, foo) {
  myArray.unshift(foo)
  return myArray
}

function addElementToEndOfArray(myArray, foo) {
  myArray = [...myArray, foo]
  return myArray
}

function destructivelyAddElementToEndOfArray(myArray, foo){
  myArray.push(foo)
  return myArray
}

function accessElementInArray(myArray, index){
  return myArray[index]
  }

function destructivelyRemoveElementFromBeginningOfArray(myArray){
  myArray.shift(myArray[0])
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
  myArray = myArray.slice(0, myArray.length - 1)
  return myArray
}
