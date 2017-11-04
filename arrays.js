//1
var chocolateBars = ["snickers","hundred grand","kitkat", "skittles"]
//2 + 3

//4 + 5
addElementToBeginningOfArray = function(a,b) {
  return [b,...a]
}
destructivelyAddElementToBeginningOfArray = function (a,b) {
  a.unshift(b);
  return a
}
//6 + 7
addElementToEndOfArray= function(a,b) {
  return [...a,b]
}
destructivelyAddElementToEndOfArray = function(a,b) {
  a.push(b)
  return a
}
//8
accessElementInArray = function(a,b){
  return a[b]
}
//9
destructivelyRemoveElementFromBeginningOfArray = function(a) {
  a.shift()
  return a
}
//12-14
removeElementFromBeginningOfArray = function(a) {
  return a.slice(1)
}
//15-16
destructivelyRemoveElementFromEndOfArray = function(a) {
  a.pop()
  return a
}
//17-18
removeElementFromEndOfArray = function(a) {
  return a.slice(0, a.length - 1)
}
