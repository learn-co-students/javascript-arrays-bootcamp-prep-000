var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

addElementToBeginningOfArray = (array, element) => {
  return [element, ...array]
}

destructivelyAddElementToBeginningOfArray = (array, element) => {
   array.unshift(element)
   return array
}
destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element)
  return array
}

addElementToEndOfArray = (array, element) => {
  return [...array, element]
}

accessElementInArray =(array, index) => {
  return array[index]
}

 destructivelyRemoveElementFromBeginningOfArray = (array) => {
   array.shift()
   return array
 }

removeElementFromBeginningOfArray= (array) => {
  return array.slice(1)
}

destructivelyRemoveElementFromEndOfArray = (array) => {
  array.splice(-1)
  return array
}

removeElementFromEndOfArray = (array) => {
  return array.slice(0, -1)
}
