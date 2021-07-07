var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){}
  var new_array = array
  const final_array = [element, ...new_array]
  return  final_array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var new_array = array
  return new_array.unshift(element)
}

function addElementToEndOfArray(array, element){
  var new_array = array
  const final_array = [...new_array, element]
  return final_array
}

function destructivelyAddElementToEndOfArray(array, element){
  var new_array = array
  return new_array.push(element)
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

function removeElementFromBeginningOfArray(array){
  new_array = array.slice(0)
  return new_array
}
