var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(arr, element) {
   return [element, ...arr];
}
function destructivelyAddElementToBeginningOfArray(arr,element) {
  var dbArr = arr
  dbArr.unshift(element)
  return dbArr
}
function addElementToEndOfArray(arr, element) {
   return [...arr, element];
}
function destructivelyAddElementToEndOfArray(arr,element) {
  var dbArr = arr
  dbArr.push(element)
  return dbArr
}
function accessElementInArray(arr, index) {
  var aArray = arr
  return (aArray[index])
}
function destructivelyRemoveElementFromBeginningOfArray(arr) {
  var drbArray = arr
  drbArray.shift()
  return drbArray
}
function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(arr) {
  var dreArray = arr
  dreArray.pop()
  return dreArray
}
function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length -1 )
}