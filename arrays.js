var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)//so first move the element
  return array//so from here It's pretty much just variations on that
}

function addElementToEndOfArray(array, element){
 return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
    return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift[0]
  return array
}

function removeElementFromBeginningOfArray(array){
return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
array.shift()
return array
}

function removeElementFromEndOfArray(array){
return array.slice(0, array.length - 1)
}
