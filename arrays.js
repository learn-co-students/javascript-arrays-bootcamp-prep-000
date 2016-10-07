var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array1, element1) {
  arraya = [element1, ...array1]
  return arraya
}

function destructivelyAddElementToBeginningOfArray(array2, element2) {
   array2.unshift(element2)
   return array2
}

function addElementToEndOfArray(array3, element3) {
  arrayb = [...array3, element3]
  return arrayb
}

function destructivelyAddElementToEndOfArray(array4, element4) {
  array4.push (element4)
  return array4
}

function accessElementInArray(array5, index5) {
  return array5[index5]
}

function destructivelyRemoveElementFromBeginningOfArray(array6) {
 array6.shift
 return array6
}

function removeElementFromBeginningOfArray(array7) {
arrayc = array7.slice(1)
return arrayc
}

function destructivelyRemoveElementFromEndOfArray(array9) {
  array9.slice(-1)
  return array9
}

function removeElementFromEndOfArray(array8) {
array8.pop()
  return array8
}
