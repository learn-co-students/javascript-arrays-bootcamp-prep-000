var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

 function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
 }

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array
}
