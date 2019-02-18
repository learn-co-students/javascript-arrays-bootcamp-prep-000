var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array1,element1) {
    return [element1,...array1]
}

function destructivelyAddElementToBeginningOfArray(array1,element1) {
    array1.unshift(element1)
    return array1
}

function addElementToEndOfArray(array1,element1) {
    return [...array1,element1]
}

function destructivelyAddElementToEndOfArray(array1,element1) {
    array1.push(element1)
    return array1
}

function accessElementInArray(array1,index) {
    return array1[parseInt(index)]
}

function destructivelyRemoveElementFromBeginningOfArray(array1) {
    array1.shift()
    return array1
}

function removeElementFromBeginningOfArray(array1) {
  return array1.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array1) {
  array1.pop()
  return array1
}

function removeElementFromEndOfArray(array1) {
  return array1.slice(0,array1.length-1)
}
