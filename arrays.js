function chocolateBars() {
  var chocolate = ["snickers","hundred grand","kitkat","skittles"]
  return chocolate
}

function addElementToBeginningOfArray(array, elem){
  array = [elem, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, elem) {
  array = array.unshift(elem)
  return array
}

function addElementToEndOfArray(array, elem){
  array = [...array, elem]
  return array
}

function destructivelyAddElementToEndOfArray(array, elem) {
  array = array.push(elem)
  return array
}

function accessElementInArray(array, i){
  myArray = array
  console.log(myArray[i])
}

function destructivelyRemoveElementFromBeginningOfArray(array){
    myArray = array.shift()
    return myArray
}
