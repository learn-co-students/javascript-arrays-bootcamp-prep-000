var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]

 function addElementToBeginningOfArray(array, element) {
   var result = [element,...array]
  return result
}

function addElementToEndOfArray(array, element) {
    var new_array = [...array, element];
    return new_array
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift()
    return array
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array
}

function accessElementInArray(array, index) {
    return array[index]
}

function removeElementFromBeginningOfArray(array) {
    var new_array = array.slice(1)
    return new_array
}

function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop()
    return array
}

function removeElementFromEndOfArray(array) {
    var new_array = array.slice(0, array.length - 1)
    return new_array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
  
}