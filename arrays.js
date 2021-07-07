var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array1, element1) {
  var arrayListA = [element1, ...array1]
  return arrayListA
}

function destructivelyAddElementToBeginningOfArray (array2, element2) {
  var arrayListB = array2
  arrayListB.unshift(element2)
  return arrayListB
}

function addElementToEndOfArray(array3, element3){
  var arrayListC = [...array3, element3]
  return arrayListC
}

function destructivelyAddElementToEndOfArray(array4, element4) {
  var arrayListD = array4
  arrayListD.push(element4)
  return arrayListD
}

function accessElementInArray (array5, index1) {
  var arrayListE = array5
  return array5[index1]
}

function destructivelyRemoveElementFromBeginningOfArray(array6){
  var arrayListF = array6
  arrayListF.shift()
  return arrayListF
}

function removeElementFromBeginningOfArray(array7){
  var arrayListG = array7
  return arrayListG.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array8){
  var arrayListH = array8
  arrayListH.pop()
  return arrayListH
}

function removeElementFromEndOfArray(array9){
  var arrayListI = array9
  return arrayListI.slice(0, arrayListI.length - 1)
}
