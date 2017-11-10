var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ]

addElementToBeginningOfArray(array,element) {
  return [...array, element]
}

destructiveAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}