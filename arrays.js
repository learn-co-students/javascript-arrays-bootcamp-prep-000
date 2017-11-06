var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(my_array, my_element) {
  return [my_element, ...my_array]
}

function destructivelyAddElementToBeginningOfArray(my_array, my_element) {
  my_array.unshift(my_element)
  return my_array
}

function addElementToEndOfArray(my_array, my_element) {
  return [...my_array, my_element]
}

function destructivelyAddElementToEndOfArray(my_array, my_element) {
  my_array.push(my_element)
  return my_array
}

function accessElementInArray(my_array, my_index) {
  return my_array[my_index]
}

function destructivelyRemoveElementFromBeginningOfArray(my_array) {
  my_array.shift()
  return my_array
}

function removeElementFromBeginningOfArray(my_array) {
  return my_array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(my_array) {
  my_array.pop()
  return my_array
}

function removeElementFromEndOfArray(my_array) {
  return my_array.slice(0, my_array.length - 1)
}
