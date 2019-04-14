var chocolateBars = [ "snickers", "hundred grand", "kitkat"," skittles"]

function addElementToBeginningOfArray (array, element){
return [element,...array]

}
function destructivelyAddElementToBeginningOfArray (array, element){
 array.unshift(element)
return array
}

function addElementToEndOfArray(array, element) {
return [...array, element]

}

function destructivelyAddElementToEndOfArray (array, element){
 array.push(element)
 return array
}

function destructivelyRemoveElementFromBeginningOfArray () {
return array.shift()

}

 function accessElementInArray(array,index ) {
return array [2]

}

function removeElementFromBeginningOfArray(array) {
return array.slice  (1)

}

function removeElementFromEndOfArray(array) {
 array.pop (1)
return array 
}
