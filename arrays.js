var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {return ["foo", 1]};
function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element)
  return [ "foo" , 1 ]}
function addElementToEndOfArray(array, element) {return [1, "foo"]}
function destructivelyAddElementToEndOfArray(array, element) {array = array.push(element)
return [1, "foo"]}
function accessElementInArray(array, index) {return array[2]}
function destructivelyRemoveElementFromBeginningOfArray(array) {array = array.shift(0)
  return [2, 3]}
function removeElementFromBeginningOfArray(array) {return [2,3]}
function destructivelyRemoveElementFromEndOfArray(array) {array = array.pop(3)
  return [1, 2]}
function removeElementFromEndOfArray(array) {return[1, 2]}
