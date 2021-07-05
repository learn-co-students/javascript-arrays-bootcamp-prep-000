var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {
  return [element,...array]
}
addElementToBeginningOfArray([1],"foo")

//?
function destructivelyAddElementToBeginningOfArray (array,element) {
  array.unshift(element)
  return array
}
destructivelyAddElementToBeginningOfArray([1],'foo')

function addElementToEndOfArray(array,element) {
  return [...array,element]
}
addElementToEndOfArray(chocolateBars,"ferror")

//?
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}
destructivelyAddElementToEndOfArray([1],'foo')

function accessElementInArray(array,index){
  return array[index]
}
accessElementInArray(chocolateBars,2)




function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
destructivelyRemoveElementFromBeginningOfArray([1,2,3])

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
removeElementFromBeginningOfArray(chocolateBars)



function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
destructivelyRemoveElementFromEndOfArray(chocolateBars)

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}
removeElementFromEndOfArray(chocolateBars)
