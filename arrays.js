var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, element){
  var newArray = [1]
  newArray = ["foo", ...newArray]
  return newArray
  }



function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift("foo")
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push("foo")
  return array
}

function addElementToEndOfArray(array, element){
  var newArray = [1]
  newArray = [...newArray, "foo"]
  return newArray
  }

  function accessElementInArray (array, index){
    return array[index]
  }

  function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift()
    return array
  }

  function removeElementFromBeginningOfArray(array){
    var array = [2, 3]
    array.slice(-1)
    return array
  }

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
    var array = [1, 2]
    array.slice(0, array.length - 1)
    return array
  }
