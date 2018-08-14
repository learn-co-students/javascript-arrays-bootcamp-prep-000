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