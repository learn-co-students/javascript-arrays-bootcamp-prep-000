var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element){
  var otherarr = arr.slice()
  otherarr.unshift(element)
  return otherarr
 }

 function destructivelyAddElementToBeginningOfArray (arr, element){
   arr.unshift(element)
   return arr
 }

function addElementToEndOfArray (arr, element){
  return [... arr, element]
}

function destructivelyAddElementToEndOfArray (array, element){
   array.push(element)
   return array
}

function accessElementInArray (a, i){
  return (a[i])
}

function destructivelyRemoveElementFromBeginningOfArray(aarray){
  aarray.shift()
return aarray
}

function removeElementFromBeginningOfArray (originalarray){
  return originalarray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
