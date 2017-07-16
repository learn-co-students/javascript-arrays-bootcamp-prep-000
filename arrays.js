var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
console.log(chocolateBars)

function addElementToBeginningOfArray(array, element){
  newArray = [element, ...array]
  console.log(newArray + " addElementToBeginningOfArray: newArray")
  console.log(array + " addElementToBeginningOfArray: array")
  return newArray
}

addElementToBeginningOfArray([1], "foo")

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  console.log(array + "destructivelyAddElementToBeginningOfArray")
  return array
}

destructivelyAddElementToBeginningOfArray([1], "foo")

function addElementToEndOfArray(array, element){
  newArray = [...array, element]
  console.log(newArray + " addElementToEndOfArray: newArray")
  console.log(array + " addElementToEndOfArray: array")
  return newArray
}

addElementToEndOfArray([1], "foo")

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  console.log(array + " destructivelyAddElementToEndOfArray")
  return array
}

destructivelyAddElementToEndOfArray([1], "foo")

function accessElementInArray(array, index){
  console.log(array[index] + " accessElementInArray")
  return array[index]
}

accessElementInArray([1], 0)

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  console.log(array + " destructivelyRemoveElementFromBeginningOfArray")
  return array
}

destructivelyRemoveElementFromBeginningOfArray([1, 2, 3])

function removeElementFromBeginningOfArray(array){
  newArray = array.slice(1)
  console.log(newArray + " removeElementFromBeginningOfArray: newArray")
  console.log(array + " removeElementFromBeginningOfArray: array")
  return newArray
}

removeElementFromBeginningOfArray([1, 2, 3])

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  console.log(array + " destructivelyRemoveElementFromEndOfArray")
  return array
}

destructivelyRemoveElementFromEndOfArray([1, 2, 3])

function removeElementFromEndOfArray(array){
  newArray = array.slice(0, array.length - 1)
  console.log(newArray + " removeElementFromEndOfArray: newArray")
  console.log(array + " removeElementFromEndOfArray: array")
  return newArray
}

removeElementFromEndOfArray([1, 2, 3])
