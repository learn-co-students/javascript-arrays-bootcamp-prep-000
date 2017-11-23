var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


var firstArray = [1, 2, 4, 8]
function addElementToBeginningOfArray (fArray,Color) {
  return [Color, ...fArray]
}
addElementToBeginningOfArray('Blue',firstArray)

var secondArray = [1, 2, 4, 8]
function destructivelyAddElementToBeginningOfArray (sArray,Color) {
sArray.unshift(Color)
return sArray
}
destructivelyAddElementToBeginningOfArray('Red', sArray)

var thirdArray = [1, 2, 4, 8]
function addElementToEndOfArray (tArray,Color) {
  return [...tArray, Color]
}
addElementToEndOfArray(thirdArray, 'Green')

var forthArray = [1, 2, 4, 8]
function destructivelyAddElementToEndOfArray (frArray,Color) {
frArray.push(Color)
  return frArray
}
destructivelyAddElementToEndOfArray('Yellow', frArray)

var fifthArray = ['Grrr', 'Arrgg', 'Ugh', 'Ack']
function accessElementInArray (fiArray, Excl) {
return fiArray[Excl]
}
accessElementInArray(fifthArray,2)

var sixthArray = ['Grrr', 'Arrgg', 'Ugh', 'Ack']
function destructivelyRemoveElementFromBeginningOfArray (siArray) {
siArray.shift()
return siArray
}
destructivelyRemoveElementFromBeginningOfArray(sixthArray)

var seventhArray = [4, 6, 7, 9, 'Orange']
function removeElementFromBeginningOfArray (seArray) {
  return seArray.slice(1)
}
removeElementFromBeginningOfArray(seventhArray)

var eigthArray = [4, 5, 6, 9, 'Maroone']
function destructivelyRemoveElementFromEndOfArray (eArray) {
  eArray.pop()
  return eArray
}
destructivelyRemoveElementFromEndOfArray(eigthArray)

var ninthArray = [4, 6, 7, 9, 'Purple']
function removeElementFromEndOfArray (niArray) {
 return niArray.slice(0, niArray.length - 1)
}
removeElementFromEndOfArray(ninthArray)
