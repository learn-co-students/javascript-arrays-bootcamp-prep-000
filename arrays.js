var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]




function addElementToBeginningOfArray(array, element){
[element,...array]

return [element,...array]
}


function destructivelyAddElementToBeginningOfArray(array, element) {
[array.unshift(element)]

return array
}


function addElementToEndOfArray(array, element) {
[array.push(element)]

return array
}

function destructivelyAddElementToEndOfArray(array, element) {
[array.push(element)]

return array
}

function accessElementInArray(array, index) {
var index = 3
return index

}

function removeElementFromBeginningOfArray(array){
[array.shift(1)]

return array
}

function removeElementFromEndOfArray(array) {
[array.pop(3)]

return array

}
