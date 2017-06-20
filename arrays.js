var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element){
  moreArrays = [element,...array]
  return moreArrays
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element){
  moreArrays = [...array, element]
  return moreArrays
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function accessElementInArray(array, index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}
function removeElementFromEndOfArray(array){
  array.pop(-1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop(-1)
  return array
}
