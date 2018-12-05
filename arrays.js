chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(a, b) {
  return [b, ...a]
}
function destructivelyAddElementToBeginningOfArray(a,b) {
  a.unshift(b)
  return a
}
function addElementToEndOfArray(a,b) {
  return [...a,b]
}
function destructivelyAddElementToEndOfArray(a,b) {
  a.push(b)
  return a
}
function accessElementInArray(a, index) {
  return a[index]
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function destructivelyRemoveElementFromBeginningOfArray(a) {
   a.shift()
   return a
}
function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop()
  return a
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

  


  

  
