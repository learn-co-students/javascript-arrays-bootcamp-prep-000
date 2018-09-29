var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arrayz,element_to_add){
  return [element_to_add, ...arrayz]
}

function destructivelyAddElementToBeginningOfArray(arrayz,element_to_add){
  arrayz.unshift(element_to_add)
  return arrayz
}

function addElementToEndOfArray(arrayz,element_to_add){
  return [...arrayz, element_to_add]
}

function destructivelyAddElementToEndOfArray(array_to, element_to_add){
  array_to.push(element_to_add)
  return array_to
}

function accessElementInArray(arrayz, number){
  return arrayz[number]
}

function destructivelyRemoveElementFromBeginningOfArray(arrayz){
  arrayz.shift()
  return arrayz
}

function removeElementFromBeginningOfArray(arrayz){
  arrayz = arrayz.slice(1)
  return arrayz
}

function destructivelyRemoveElementFromEndOfArray(arrayz){
  arrayz.pop()
  return arrayz
}

function removeElementFromEndOfArray(arrayz){
  return arrayz.slice(0,arrayz.length -1)
}