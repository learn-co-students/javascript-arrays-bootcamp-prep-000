var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

  function addElementToBeginningOfArray(array, element) {
    var newArray = [element, ...array]
    return newArray
  }

  function destructivelyAddElementToBeginningOfArray (array, element) {
    array = array.unshift(element)
    return array
  }

  function addElementToEndOfArray(array, element) {
    var newArray = [...array, element]
    return newArray
  }

  function destructivelyAddElementToEndOfArray(array, element) {
    array = array.push(element)
    return array
  }

  function accessElementInArray(array, index) {
    array = [index]
  }

  function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift()
    return array
  }

  function removeElementFromBeginningOfArray(array) {
    array = array.slice(1)
    return array
  }

  function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop()
    return array
  }

  function removeElementFromEndOfArray(array) {
    var newArray = array.slice(0, array.length-1)
    return newArray
  }
