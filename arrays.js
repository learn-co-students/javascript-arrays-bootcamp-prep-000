function addElementToBeginningOfArray(arrayList, newArrayElement) {
  var newArrayList = arrayList
  return [newArrayElement, ...newArrayList]
}

function destructivelyAddElementToBeginningOfArray(arrayList, newArrayElement) {
  return [newArrayElement, ...arrayList]
}

function addElementToEndOfArray(arrayList, newArrayElement) {
  var newArrayList = arrayList
  return [...newArrayList, newArrayElement]
}

function destructivelyAddElementToEndOfArray(arrayList, newArrayElement) {
  return [...arrayList, newArrayElement]
}

function accessElementInArray(arrayList, chosenArrayElementIndex) {
  return arrayList[chosenArrayElementIndex]
}

function destructivelyRemoveElementFromBeginningOfArray(arrayList) {
  arrayList.shift()
  return arrayList
}

function removeElementFromBeginningOfArray(arrayList) {
  arrayList.slice(0,1)
  return arrayList
}

function destructivelyRemoveElementFromEndOfArray(arrayList) {
  arrayList.pop()
  return arrayList
}

function removeElementFromEndOfArray(arrayList) {
  arrayList.slice(-1)
  return arrayList
}
