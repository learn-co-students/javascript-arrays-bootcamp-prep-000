var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

// should not modify original array
function addElementToBeginningOfArray (array, element ) {
 var newarray = [element, ...array]
  return newarray
}


// should modify original array
function destructivelyAddElementToBeginningOfArray (array,element) {
 // var array = array
 // var element = element
  var array2 = array.unshift(element)
  return array
}



//should not alter original array
function addElementToEndOfArray (array,element) {
 //var array = array
  var newarray = [...array, element]
  return newarray
}


//should alter original array
function destructivelyAddElementToEndOfArray (array, element) {

    array.push(element)

  return array

}


function accessElementInArray (array, index) {

array[index]

return array[index]
}



//this function should be destructiive
function destructivelyRemoveElementFromBeginningOfArray(array) {


var newarray = array.shift()

return array

}

//this function should not mutate original array
function removeElementFromBeginningOfArray (array) {

 array = array.slice(1)

  return array
}

//should mutate original
function destructivelyRemoveElementFromEndOfArray(array) {

  array.pop()

  return array
}

//should not mutate original array
function removeElementFromEndOfArray(array) {

  var array = array.slice(0, array.length-1)

  return array
}
