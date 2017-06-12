var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(arrayVar, element) {
  var newArray = arrayVar.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray (arrayVar, element) {
  arrayVar.slice(1)
  arrayVar.unshift(element)
  return arrayVar
}

function addElementToEndOfArray (arrayVar, element) {
  var newArray = arrayVar.push(element)
  return newArray
}

function destructivelyAddElementToEndOfArray (arrayVar, element) {
  var length = arrayVar.length
  arrayVar.slice(,length-1)
  arrayVar.push(element)
}

function accessElementInArray (arrayVar, index) {
  console.log(arrayVar[index])
  return arrayVar[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arrayVar) {
  arrayVar.shift()
  return arrayVar
}

function removeElementFromBeginningOfArray(arrayVar) {
  var newArray = arrayVar.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(arrayVar) {
  arrayVar.pop()
  return arrayVar
}

function removeElementFromEndOfArray(arrayVar) {
  var newArray = arrayVar.slice(,arrayVar.length-1)
  return newArray
}
