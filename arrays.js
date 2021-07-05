/*   arrays chocolateBars is an array containing "snickers", "hundred grand", "kitkat", and "skittles"*/
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
/*   arrays addElementToBeginningOfArray(array, element) adds an `element` to the beginning of an `array`
     arrays addElementToBeginningOfArray(array, element) does not alter `array`*/
function addElementToBeginningOfArray(array, element) {
  ['element', ...array]
}

/*   arrays destructivelyAddElementToBeginningOfArray(array, element) adds an `element` to the beginning of an `array`
     arrays destructivelyAddElementToBeginningOfArray(array, element) alters `array` */
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('element')
}
/*   arrays addElementToEndOfArray(array, element) adds an `element` to the end of an `array`
     arrays addElementToEndOfArray(array, element) does not alter `array`*/
function addElementToEndOfArray(array, element) {
  [...array, 'element']
}
/*   arrays destructivelyAddElementToEndOfArray(array, element) adds an `element` to the end of an `array`
     arrays destructivelyAddElementToEndOfArray(array, element) alters `array`*/
function destructivelyAddElementToEndOfArray(array, element) {
  chocolateBars.push('element')
}
/*   arrays accessElementInArray(array, index) accesses the element in `array` at the given `index`*/
function accessElementInArray(array, index) {
  console.log(chocolateBars[index])
}
/*   arrays removeElementFromBeginningOfArray(array) removes the first element from the `array`*/
function removeElementFromBeginningOfArray(array) {
  chocolateBars.shift()
}
/*   arrays removeElementFromEndOfArray(array) removes the last element from the `array`*/
function removeElementFromEndOfArray(array) {
  chocolateBars.pop()
     }
