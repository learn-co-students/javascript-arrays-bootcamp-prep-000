var chocolateBars = ["snickers", "hundrend grand", "kitkat","skittles"];
function addElementToBeginningOfArray(array, addedElement) {
  array = [addedElement, ...array]
  return array
}
function destructivelyAddElementToBeginningOfArray(array,addedElement) {
 array.unshift(addedElement)
 return array
}
function destructivelyAddElementToEndOfArray(array, addedElement) {
  array.push(addedElement)
  return array
}

function addElementToEndOfArray(array, addedElement) {
  return [...array,addedElement]
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
 function removeElementFromBeginningOfArray(array) {
   return array.slice(1)
 }
 function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop()
   return array
 }
 function removeElementFromEndOfArray(array) {
   return array.slice(0,array.length -1)
 }
 
 console.log(addElementToEndOfArray(chocolateBars,"milky way"))
 console.log(chocolateBars)