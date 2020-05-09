var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
console.log(chocolateBars)

function addElementToBeginningOfArray(array,element){
  var z = [element,...array]
  return z
}
var a = addElementToBeginningOfArray(chocolateBars,"m&m")
console.log(a)

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)

  return array;
}
var b = destructivelyAddElementToBeginningOfArray(chocolateBars,"m&m")
console.log(b)

function addElementToEndOfArray(array,element) {
  var e = [...array,element]
  return e;
}
var c = addElementToEndOfArray(chocolateBars,"m&m")
console.log(c)

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array;
}
var d = destructivelyAddElementToEndOfArray(chocolateBars,"m&m")
console.log(d)

function accessElementInArray(array,index) {
  return array[index];
}
var g = accessElementInArray(chocolateBars,[5]);
console.log(g)

function destructivelyRemoveElementFromBeginningOfArray(array) {
 array.shift()
 return array }
var j = destructivelyRemoveElementFromBeginningOfArray(chocolateBars);
console.log(j)

function removeElementFromBeginningOfArray(array) {
  var o = array.slice(1)
  return o}
var l = removeElementFromBeginningOfArray(chocolateBars);
console.log(l)

function destructivelyRemoveElementFromEndOfArray(array) {
 array.pop()
 return array }
var j = destructivelyRemoveElementFromEndOfArray(chocolateBars);
console.log(j)

function removeElementFromEndOfArray(array) {
  var t = array.slice(0, array.length - 1)
  return t}
var s = removeElementFromEndOfArray(chocolateBars);
console.log(s)
