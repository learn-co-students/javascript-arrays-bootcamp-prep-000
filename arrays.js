var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray (array1,elem1) {
  array1 = [elem1,...array1]
  return array1
}

function destructivelyAddElementToBeginningOfArray (array2,elem2) {
  array2.unshift(elem2)
  return array2
}

function addElementToEndOfArray (array3,elem3) {
  array3 = [...array3,elem3]
  return array3
}

function destructivelyAddElementToEndOfArray (array4,elem4) {
  array4.push(elem4)
  return array4
}

function accessElementInArray (a5,ind5) {
  return a5[ind5]
}

function destructivelyRemoveElementFromBeginningOfArray (a6) {
  a6.shift()
  return a6
}

function removeElementFromBeginningOfArray (a7) {
  a7=a7.slice(1)
  return a7
}

function destructivelyRemoveElementFromEndOfArray (a8) {
  a8.pop()
  return a8
}

function removeElementFromEndOfArray (a9) {
  a9=a9.slice(0,a9.length-1)
  return a9
}