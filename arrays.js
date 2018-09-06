var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, element) {

  return [element,...array]
}
  // 
function destructivelyAddElementToBeginningOfArray (array, element) {
   array.unshift(element)
  return array
}
function addElementToEndOfArray (array, element) {
  return [...array, element]
  
  
}
function destructivelyAddElementToEndOfArray (array, element) {
 array.push(element) 
 return array

}

function accessElementInArray (array, index) {
  return (array [index])
}
function destructivelyRemoveElementFromBeginningOfArray (array){
console.log ('this is the original', `${array}`)
array.shift()
console.log ('this returns the removed element', `${array}`)
  return array 
  }
  
function removeElementFromBeginningOfArray (array){
console.log ('this is the original of removeElementFromBeginningOfArray:', `${array}`)
console.log ('this is the result', `${array.slice(1)}`)
  return array.slice(1) 
  }
  
  // push and pop methods are destructive; it mutates the array.  the array.pop() just
  // returns the removed element 
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray (array) {
  return array.slice(0,array.length -1)
}