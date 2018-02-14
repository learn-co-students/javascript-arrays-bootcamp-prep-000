chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  let = newArr = array.slice()
  newArr.unshift(element)
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  // let = newArr = array.slice()
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  let = newArr = array.slice()
  newArr.push(element)
  return newArr
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  let = newArr = array.slice()
  newArr.shift()
  return newArr
}

function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop()
   return array
}
function removeElementFromEndOfArray(array) {
  let = newArr = array.slice()
  newArr.pop()
  return newArr
}
