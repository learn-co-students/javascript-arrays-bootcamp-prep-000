var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]



  function destructivelyAddElementToBeginningOfArray(array, element) {

    array.unshift(element)
    return array
  }

function addElementToBeginningOfArray(array, element) {
return   [element, ...array]

}

function addElementToEndOfArray(array, element) {
 return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {

    array.push(element)

  return array
}

function accessElementInArray(array, index) {
  return array[index];

}


function   destructivelyRemoveElementFromEndOfArray(array) {

     array.pop(array)
     return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {

  array.shift()
  return array
}


function removeElementFromBeginningOfArray(array) {

return array.slice(1)

}

function removeElementFromEndOfArray(array) {

  array = [1 , 2,]

  array.splice(2)

  return array
}
