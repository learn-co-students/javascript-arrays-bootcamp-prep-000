chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, ele){
  return [ele, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, ele){
  return arr.unshift(ele)
}

function addElementToEndOfArray(arr, ele){
  return [...arr, ele]
}

function destructivelyAddElementToEndOfArray(arr, ele){
  return arr.push(ele)
}

function accessElementInArray(arr, ind){
  return arr[ind]
}

function destructivelyRemoveElementFromBeginningOfArray(arr, ele){
  return arr.shift(ele)
}

function removeElementFromBeginningOfArray(arr, ele){
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr, ele){
  arr.pop()
  return arr 
}

function removeElementFromEndOfArray(arr, ele){
  return arr.slice(0, arr.length - 1)
}
