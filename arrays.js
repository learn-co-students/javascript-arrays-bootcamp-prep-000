var array = [1]
var accessElementInArray = [1, 2, 3]
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
console.log(chocolateBars)
function addElementToBeginningOfArray(array, element) {
array = ['foo', ...array]
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift('foo')
 return array
}
function addElementToEndOfArray(array, element) {
array = [...array, 'foo']
 return array
}
function destructivelyAddElementToEndOfArray(array, element) {
array.push('foo')
return array
}
