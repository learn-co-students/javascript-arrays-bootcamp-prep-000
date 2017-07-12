var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

// return new array and not modify the original
  function addElementToBeginningOfArray(array, element) {
      newArray = [element, ... array]
      return newArray

}

// pass in element to beginning, destroy
  function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
}

// do not alter the original
  function addElementToEndOfArray(array, element) {
     newArray = [...array, element]
     return newArray
}


// alter the original
  function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array
}

// accept array and index and return the element at that index
  function accessElementInArray(array, index) {
    return array[index]


}

  function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift()//should remove first elements
    return array
}

  function removeElementFromBeginningOfArray(array) {
     newArray = array.slice(1)//why isn't this an index, like .slice[1]
     return newArray
}

  function destructivelyRemoveElementFromEndOfArray(array) {
     array.pop(-1)
     return array
}
  function removeElementFromEndOfArray(array) {
    newArray = array.slice(0, array.length -1)
    return newArray

  }
