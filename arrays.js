var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(array,element){
  var newArray = [element,...array]
  return newArray
}
function addElementToEndOfArray(array,element){
  var newArray = [...array,element]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}
function accessElementInArray(array,index){
  var iarr = array[index]
  return iarr
}
function removeElementFromBeginningOfArray(array){
    array.shift()
    return array
}
function removeElementFromEndOfArray(array){
    array.pop()
    return array
}