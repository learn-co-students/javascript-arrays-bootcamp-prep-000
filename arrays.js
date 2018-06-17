var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray( array, e ) {
  var myArray = array.unshift([])
  return myArray
}

function destructivelyAddElementToBeginningOfArray( array, e ) {
  array.unshift()
  return array
}

function accessElementInArray( array, e ) {
  var pos = myArray.indexOf([e]);
  myArray[e] = pos
  retun e
}
