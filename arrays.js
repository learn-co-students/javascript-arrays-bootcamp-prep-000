var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
]

function addElementToBeginningOfArray(myarray, myelement){
  return [myelement, ...myarray]
}

function destructivelyAddElementToBeginningOfArray(myarray, myelement){
  myarray.unshift(myelement)
  return myarray
}

function addElementToEndOfArray (myarray, myelement){
  return [...myarray, myelement]
}

function destructivelyAddElementToEndOfArray (myarray, myelement){
  myarray.push(myelement)
  return myarray
}

function accessElementInArray(array,index){
  return array[index]
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1)
}
