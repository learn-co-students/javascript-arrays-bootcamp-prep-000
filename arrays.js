
var chocolateBars = ["snickers","hundred grand",'kitkat',"skittles"]


function destructivelyAddElementToBeginningOfArray(array,element) {
var Perro = array
Perro.unshift(element)
return Perro
}

function addElementToBeginningOfArray(array,element) {
array.unshift(element)
return array
}

function destructivelyAddElementToEndOfArray(array,element) {
var Perro = array
Perro.push(element)
return Perro
}

function addElementToEndOfArray(array,element) {
array.push(element)
return array
}

function accessElementInArray(array,index){
return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift()
return array
}

function removeElementFromBeginningOfArray(array){
nuevo = array.slice(1)
return nuevo
}

function removeElementFromEndOfArray(array){
nuevo = array.pop()
return array
}

function destructivelyRemoveElementFromEndOfArray(array){
array.pop()
return array
}
