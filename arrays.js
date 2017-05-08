var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(list, element) {
  return [element, ...list]
}

function destructivelyAddElementToBeginningOfArray(list, element) {
  list.unshift(element)
  return list
}

function addElementToEndOfArray(list, element) {
  return [...list, element]
}

function destructivelyAddElementToEndOfArray(list, element) {
  list.push(element)
  return list
}

function accessElementInArray(list, index) {
  return list[index]
}

function destructivelyRemoveElementFromBeginningOfArray(list) {
  list.shift()
  return list
}

function removeElementFromBeginningOfArray(list) {
  return list.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(list) {
  list.pop()
  return list
}

function removeElementFromEndOfArray(list) {
  return list.slice(0, list.length - 1)
}
