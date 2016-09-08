var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]

var array = new Array
function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element)
return array
}

var array = new Array
function destructivelyAddElementToEndOfArray(array, element) {
array.push(element)
return array
}

var array = new Array
function addElementToBeginningOfArray(array, element) {
["element", ...array]
return array
}

var array = new Array
function addElementToEndOfArray(array, element) {
[...array, "element"]
return array
}
