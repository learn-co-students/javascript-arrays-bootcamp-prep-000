var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arr,element){
  var newarray = [element, ...arr]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(arr,element){

  arr.unshift(element)
  return arr

}

function addElementToEndOfArray(arr,element){
  var newarray = [...arr, element]
  return newarray
}

function destructivelyAddElementToEndOfArray(arr,element){

  arr.push(element)
  return arr

}

function accessElementInArray(arr,index){
  return arr[index]
}

// function destructivelyRemoveElementFromBeginningOfArray(arr){
//   arr.shift()
//   return arr
// }


function removeElementFromBeginningOfArray(arr){
  return arr.slice(1)
}

function removeElementFromEndOfArray(arr){
  arr.pop()
  return arr
}
