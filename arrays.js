var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ]

function addElementToBeginningOfArray( arraylist, element ) {
  const moreElements = [ element, ...arraylist ]
  
  return moreElements
}

function destructivelyAddElementToBeginningOfArray( arraylist, element ) {
  arraylist.unshift(element)
  
  return arraylist
}

function addElementToEndOfArray( arraylist, element ) {
  const moreElements = [ ...arraylist, element ]
  
  return moreElements
}

function destructivelyAddElementToEndOfArray( arraylist, element ) {
  arraylist.push(element)
  
  return arraylist
}

function accessElementInArray( arraylist, index ) {
  return arraylist[index]
}

function destructivelyRemoveElementFromBeginningOfArray( arraylist ) {
  arraylist.shift()
  return arraylist
}

function removeElementFromBeginningOfArray( arraylist ) {
  return arraylist.slice(1)
}

function destructivelyRemoveElementFromEndOfArray( arraylist ) {
  arraylist.pop()
  
  return arraylist
}

function removeElementFromEndOfArray( arraylist ) {
  return arraylist.slice(0, arraylist.length - 1)
}

