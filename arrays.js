chocolateBars = new Array()
chocolateBars.push("snickers")
chocolateBars.push("hundred grand")
chocolateBars.push("kitkat")
chocolateBars.push("skittles")
console.log(chocolateBars)

function addElementToBeginningOfArray(array, element) {
 
    var newArray= new Array() 
  newArray.push(element)
  newArray.push(...array)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element)  {
  var newArray = new Array()
  newArray.push(...array)
  newArray.push(element)
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

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

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}

