var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){

  var unDes = [array]

  unDes = [element, ...array]
  return unDes
}

function destructivelyAddElementToBeginningOfArray(array, element) {


  array.unshift(element)
  return array

}

function addElementToEndOfArray(array, element){

  var unDesAdd = [array]
  unDesAdd = [...array, element]
  return unDesAdd
}

function destructivelyAddElementToEndOfArray(array, element){

  array.push(element)
  return array
}

function accessElementInArray(array, index){

  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){

  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray(array){

  var unDesRem = array
  unDesRem = unDesRem.slice(1)
    return unDesRem
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var unDesRem = array
  unDesRem = unDesRem.slice(0, unDesRem.length -1)
  return unDesRem
}
