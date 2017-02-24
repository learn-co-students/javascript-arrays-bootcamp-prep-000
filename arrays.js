var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray( arrayName, element ) {
  
  var myArray = new Array()

  myArray = arrayName
  myArray.unshift( element )
  return myArray
}

function destructivelyAddElementToBeginningOfArray( arrayName, element ) {

  arrayName.unshift( element )
  return arrayName  
}

function addElementToEndOfArray( arrayName, element ) {
  
  var myArray = new Array()
  myArray = arrayName

  myArray.push( element )
  return myArray
  
}

function destructivelyAddElementToEndOfArray( arrayName, element ) {

  arrayName.push( element )
  return arrayName  
  
}

function accessElementInArray( arrayName, index ) {

  return( arrayName[index] )
}

function destructivelyRemoveElementFromBeginningOfArray( arrayName ) {
  
  arrayName.shift()
  return arrayName
}

function removeElementFromBeginningOfArray( arrayName ) {

    var myArray = new Array()

    myArray = arrayName
    myArray.shift(1)
    return myArray  
}

function destructivelyRemoveElementFromEndOfArray( arrayName ) {

  arrayName.pop()
  return arrayName  
}

function removeElementFromEndOfArray( arrayName ) {

  var myArray = new Array()

  myArray = arrayName
  myArray.pop(myArray)
  return myArray    
}