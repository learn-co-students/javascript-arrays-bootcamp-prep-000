var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skitles']

function addElementToBeginningOfArray(arrayToEdit, element) {
  newArray = [element, ...arrayToEdit]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(arrayToEdit, element) {
  arrayToEdit.unshift(element)
  return arrayToEdit
}

function addElementToEndOfArray(arrayToEdit, element) {
  var newArray = [...arrayToEdit, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(arrayToEdit, element) {
  arrayToEdit.push(element)
  return arrayToEdit
}

function accessElementInArray(arrayToSearch, index) {
  return arrayToSearch[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arrayToEdit) {
  arrayToEdit.shift()
  return arrayToEdit
}

function removeElementFromBeginningOfArray(arrayToEdit) {
  var newArray = arrayToEdit.slice(1);
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(arrayToEdit) {
  arrayToEdit.pop()
  return arrayToEdit
}

function removeElementFromEndOfArray(arrayToEdit) {
  var newArray = arrayToEdit.slice(0, arrayToEdit.length - 1)
  return newArray
}