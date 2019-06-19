var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arr,foo){
  
   var newArr =['foo',...arr];
  return newArr
}

function destructivelyAddElementToBeginningOfArray(arr,foo){
  arr.unshift(foo)
  return arr
}

function addElementToEndOfArray(arr,elem){
  var newArr = [...arr,elem]
  return newArr
}

function destructivelyAddElementToEndOfArray(arr,elem){
  arr.push(elem)
  return arr
}

function accessElementInArray(arr,index){
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift()
}
function removeElementFromBeginningOfArray(arr){
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr){
  arr.slice(arr.length)
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromEndOfArray(arr){
 let newArr = arr.slice(0,arr.length-1)
 return newArr
}
