var chocolateBars = [ 
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginingOfArray(array, element) {
  var array = array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, value){
  return array.unshift(value)
}

function addElementToEndOfArray(array, value){
  var endOfArray = array.push(value)
  return endOfArray
}

function destructivelyAddElementToEndOfArray(array, value) {
  return array.push(value)
}
