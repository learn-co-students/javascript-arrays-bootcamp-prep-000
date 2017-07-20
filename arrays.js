var chocolateBars = ['snickers','hundred grand',  'kitkat', 'skittles',]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element) {
(array,element).unshift()
  return array
}

function destructivelyAddElementToEndOfArray(array){
  array.unshift()
  return array
}

function addElementToEndOfArray(array,element){
  return [...array, element]
}
  function accessElementInArray(){
    return (chocolateBars,3)
  }
  function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift()
    return array
  }
