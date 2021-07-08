var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray( a, n ) { return [n, ...a] }

function destructivelyAddElementToBeginningOfArray( a, n ) {
  a.unshift( n )
  return a
}

function addElementToEndOfArray( a, n ) { return [...a, n] }

function destructivelyAddElementToEndOfArray( a, n ) {
  a.push( n )
  return a
}

function accessElementInArray( a, i ) { return a[i] }

function destructivelyRemoveElementFromBeginningOfArray ( a ){
  a.shift()
  return a
}

function removeElementFromBeginningOfArray( a ){ return a.slice( 1 ) }

function destructivelyRemoveElementFromEndOfArray( a ) {
  a.pop()
  return a
}

function removeElementFromEndOfArray ( a ){ return a.slice( 0, a.length - 1 )}
