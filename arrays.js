var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"] ;

function addElementToBeginningOfArray(array, element) {
  var c = [element, ...array] ;
  return c ;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift(element)
 console.log(array)
 return array

}

function addElementToEndOfArray(array, element) {
  var c = [...array, element];
  return c
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array

}

function accessElementInArray(array, index) {
  var access = array[index]
  return access
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift()
    return array
}

function removeElementFromBeginningOfArray(array) {
  var slice = (array.slice(1))
  return slice

}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var slice = array.slice(0, array.length - 1)
  console.log(slice)
  return slice

  //var array = []
  //var remove = array.shift()
//  return remove

}

removeElementFromEndOfArray([1,2,3])

/**/
