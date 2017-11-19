chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(arr, element){
  var newArr = arr.slice()
  newArr.unshift(element)
  return newArr
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element)
  return arr
}

function addElementToEndOfArray(arr, element){
  var newArr = arr.slice()
  newArr.push(element)
  return newArr
}

function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element)
  return arr
}

function accessElementInArray(arr, index){
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  var newArr = arr.slice()
  newArr.shift()
  return newArr
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr){
  var newArr = arr.slice()
  newArr.pop()
  return newArr
}
