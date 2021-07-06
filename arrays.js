//Chocolate bar array
var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

//add an element to the beginning of an array
function addElementToBeginningOfArray(array,element){
  return [element,...array]
}

//distructively add an element to the beginning of an array 
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

// add an element to the end of an array
function addElementToEndOfArray(array,element){
  return [...array,element]
}

//destructively add element to the beginning of an array
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}

//access element within an array
function accessElementInArray(array,index){
  return array[index]
}

//destructively remove an element from the beginning of an array
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

//remove element from the beginning of an array
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

//destructively remove an element from the end of an array
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

//remove an element from the enod of an array
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}
