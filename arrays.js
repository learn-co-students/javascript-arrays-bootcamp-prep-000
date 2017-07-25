var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(myArray, elem) {
  var newArray = [elem, ...myArray]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(myArray, elem) {
  myArray.unshift(elem)
  return myArray
}

var testArray = ["zero", "one"]

/* ADD ELEMENTS TEST
console.log(testArray)
console.log("Array reads")
console.log(addElementToBeginningOfArray(testArray, 1))
console.log("now test reads")
console.log(testArray)
*/

/*
//destructive one
console.log(testArray)
console.log("Array reads")
console.log(destructivelyAddElementToBeginningOfArray(testArray, 1))
console.log("now test reads")
console.log(testArray)
*/

function addElementToEndOfArray(array, elem) {
  //var newArray = [...array, elem]
  return [...array, elem]
}

function destructivelyAddElementToEndOfArray(array, elem) {
  array.push(elem)
  return array
}
//end of adding to end

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
