var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array1, elementToAdd) {newArray1 = [elementToAdd, ...array1]; return newArray1}
function destructivelyAddElementToBeginningOfArray (array1, elementToAdd) {array1.unshift(elementToAdd); return array1}
function addElementToEndOfArray (array1, elementToAdd) {newArray1 = [...array1,elementToAdd]; return newArray1}
function destructivelyAddElementToEndOfArray (array1, elementToAdd) {array1.push(elementToAdd); return array1}
function accessElementInArray (array, index) {return array[index]}
function destructivelyRemoveElementFromBeginningOfArray (array) {array.shift(); return array}
function removeElementFromBeginningOfArray (array) {NewArray=array.slice(1); return NewArray}
function removeElementFromEndOfArray (array) {NewArray=array.slice(0,array.length-1); return NewArray}
