var chocolateBars = [`snickers`,`hundred grand`, `kitkat`,`skittles`]

function addElementToBeginningOfArray(array,element){
    var newArray = array
    newArray = [`foo`, ...newArray]
    return newArray

}

function destructivelyAddElementToBeginningOfArray(array,element){
  var newArray1 = array
  newArray1.unshift(`foo`)
  return newArray1
}

function addElementToEndOfArray(array,element){
  var newArray2 = array
  newArray2 = [...newArray2, `foo`]
  return newArray2
}

function destructivelyAddElementToEndOfArray(array,element){
  var newArray3 = array
  newArray3.push('foo')
  return newArray3
}

function accessElementInArray(array,index){
  var element = [1,2,3,4]
  return element[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var newArray4 = array
  newArray4.shift()
  return newArray4
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  var newArray6 = array
  newArray6.pop()
  return newArray6
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)

}
