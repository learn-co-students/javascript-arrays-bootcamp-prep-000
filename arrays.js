//first
function addElementToBeginningOfArray(a,b){
 a=[b,...a]
 var newArray = a
 return newArray
  }

//second
function destructivelyAddElementToBeginningOfArray(a,b){
  a.unshift(b)
  return a
}
//third
function addElementToEndOfArray(a,b){
  a=[...a,b]
  var newAgain = a
  return newAgain
}
//4
function destructivelyAddElementToEndOfArray(a,b){
  a.push(b)
  return a
}
//5
function accessElementInArray(a,b){
  return(a[b])
}
//6
function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift()
  return a
}
function removeElementFromBeginningOfArray(a){
  var newSlice = a.slice(1)
  return newSlice
}
var destructivelyRemoveElementFromEndOfArray = function(a){
  a.pop()
  return a
}
var removeElementFromEndOfArray = function(a){
  var newBie = a.slice(0,a.length-1)
  return newBie
}

var chocolateBars = ['snickers','hundred grand','kitkat','skittles']


var cat = ["Milo","Chester","Teddy","Sebastian","Chad","Frisky"]
console.log(cat.slice(-1))

Object.keys([1,2,3])

