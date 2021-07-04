var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(arrayName, newElement){
  newArray = [newElement,...arrayName]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(arrayName, newElement){
  arrayName.unshift(newElement)
  return arrayName
}
function addElementToEndOfArray(arrayName, newElement){
  newArray = [...arrayName, newElement]
  return newArray
}
function destructivelyAddElementToEndOfArray(arrayName, newElement){
  arrayName.push(newElement)
  return arrayName
}
function accessElementInArray(arrayName, index) {
  return arrayName[index]
}
function destructivelyRemoveElementFromBeginningOfArray(arrayName){
    arrayName.shift()
    return arrayName
}
function removeElementFromBeginningOfArray(arrayName){
    return arrayName.slice(1)
}
var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles'];
function destructivelyRemoveElementFromEndOfArray(arrayName){
    arrayName.pop()
    return arrayName
}
function removeElementFromEndOfArray(arrayName){
    return arrayName.slice(0,arrayName.length-1)
}
