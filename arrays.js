var chocolateBars = ['snickers', 'hundered grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(list, x){
  newList = [x,...list]
  return newList
}

function destructivelyAddElementToBeginningOfArray(list, x){
  list.unshift(x)
  return list
}

function addElementToEndOfArray(list, x){
  newList = [...list, x]
  return newList
}

function destructivelyAddElementToEndOfArray(list, x){
  list.push(x)
  return list
}

function accessElementInArray (list, x) {
  return list[x]
}

function destructivelyRemoveElementFromBeginningOfArray(list){
  list.shift()
  return list
}

function removeElementFromBeginningOfArray(list){
  newList = list.slice(1)
  return newList
}

function destructivelyRemoveElementFromEndOfArray(list){
  list.pop()
  return list
}

function removeElementFromEndOfArray(list){
  newList = list.slice(0, list.length - 1)
  return newList
}