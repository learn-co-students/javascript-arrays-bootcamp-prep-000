function addElementToBeginningOfArray(ar, n) {
    ar.unshift(n)
    return ar
}

function addElementToEndOfArray(ar, n){
  ar.push(n)
  return ar
  ar.pop()
}

function destructivelyAddElementToBeginningOfArray(ar, n) {
  const new_ar = ar
  ar.unshift(n)
  return ar
}

function destructivelyAddElementToEndOfArray(ar, n){
  ar.push(n)
  return ar
  ar.pop()
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromEndOfArray(array){
  array.pop()
  return array
}

function chocolateBars(){
  let ar = ["snickers", "hundred grand", "kitkat", "skittles"]
  return ar
}
