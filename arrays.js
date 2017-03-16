// var chocolateBars = ['snickers','hundred grand', 'kitkat','skittles']
//
// function addElementToBeginningOfArray(array,element){
// var  newArray = [element,...array]
//   return newArray
// }
// function destructivelyAddElementToBeginningOfArray(array,element){
//    array.unshift(element)
//    return array
// }
//
// function addElementToEndOfArray(array,element){
//   var newArray = [...array, element]
//   return newArray
// }
//
// function destructivelyAddElementToEndOfArray(array,element){
//   array.push(element)
//   return array
// }
//
// function accessElementInArray(array,index){
//   return array[index]
// }
//
// function destructivelyRemoveElementFromBeginningOfArray(array){
//   array.shift()
//   return array
// }
//
// function removeElementFromBeginningOfArray(array){
//   newArray = array.slice(1)
//   return newArray
// }
//
// function destructivelyRemoveElementFromEndOfArray(array){
//   array.pop()
//   return array
// }
//
// function removeElementFromEndOfArray(array){
//   newArray = array.slice(0,array.length-1)
//   return newArray
// }


var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, newel){
  return [newel, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, newel){
   array.unshift(newel)
   return array
}

function addElementToEndOfArray(array, newel){
  return [...array, newel]
}

function destructivelyAddElementToEndOfArray(array, newel){
  array.push(newel)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)

}

function removeElementFromEndOfArray(array){
  array.pop()
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
