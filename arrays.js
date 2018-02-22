var chocolateBars=[
  'snickers',
  'hundred grand',
  'kitkat'
  ]

function addElementToBeginningOfArray(arr,add){
  return [add,...arr]
}
function destructivelyAddElementToBeginningOfArray(arr,add){
  arr.unshift(add)
  return arr
}
function addElementToEndOfArray(arr,add){
  return [...arr,add]
}
function destructivelyAddElementToEndOfArray(arr,add){
  arr.push(add)
  return arr
}
function accessElementInArray(arr,indx){
  return arr[indx];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift(arr)
  return arr
}
function removeElementFromBeginningOfArray (arr){
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (arr){
  arr.pop()
  return arr
}
function removeElementFromEndOfArray(arr){
  return arr.slice(0,arr.length-1)
}
