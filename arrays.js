var chocolateBars = [ "snickers", "hundred", "grand", "kitkat", "skittles" ];

function addElementToBeginningOfArray(array, element) { 
var lmd = array
 lmd = [element, ...lmd]
 return lmd
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var dml = array
  dml.unshift(element)
  return dml
}

function addElementToEndOfArray(array, element){
  var lmd = array
 lmd = [ ...lmd, element]
 return lmd
}

function destructivelyAddElementToEndOfArray(array, element) {
  var dml = array
  dml.push(element)
  return dml
}

function accessElementInArray(array, index) { 
  var arr = array
  return arr[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) { 
  var arr = array
  arr.shift()
  return arr
}
function removeElementFromBeginningOfArray(array) {
 var arr = array
   arr = arr.slice(-2)
  return arr
}
function destructivelyRemoveElementFromEndOfArray(array) {
  var arr = array
  arr.pop()
  return arr
}
function removeElementFromEndOfArray(array) {
  var arr = array
 arr = arr.slice(0, arr.length - 1)
  return arr
}
     
    function lmd(arr, index) {
      var num = arr
      x = index
      y = x - 1
      z = 2
    num = [...num.slice(0, y), ...num.slice(x)]
       return num
    }
   