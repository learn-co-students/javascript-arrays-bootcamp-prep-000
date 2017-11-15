var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
];

function removeElementFromEndOfArray(array) {
      var fix = array.slice(0, array.length - 1)
      return fix
}

function destructivelyAddElementToBeginningOfArray(array,element) {
        array.unshift(element)
        return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop()
   return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
       array.shift()
       return array
}

function addElementToBeginningOfArray (array,element) {
      return [element, ...array]
}

function addElementToEndOfArray (array,element) {

      return [...array, element]
}

function destructivelyAddElementToEndOfArray (array,element) {
   array.push(element)
   return array
}

function removeElementFromBeginningOfArray(array) {
      var fix = array.slice(1)
      return fix
}

function accessElementInArray(array, n) {
      return array[n]
}
