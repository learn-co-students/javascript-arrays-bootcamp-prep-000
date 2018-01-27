var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element){
    return [element, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, element){
    arr.unshift(element)
    return arr
}

function addElementToEndOfArray(arr, element){
    return [...arr, element]
}

function destructivelyAddElementToEndOfArray(arr, element){
    arr.push(element)
    return arr
}

function accessElementInArray(arr, index){
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr, element){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray (arr, element){
  var arrr = arr.slice(1)
  return arrr
}

function destructivelyRemoveElementFromEndOfArray(arr, element){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr, element){
  var arrr = arr.slice(0, arr.length -1)
  return arrr
}