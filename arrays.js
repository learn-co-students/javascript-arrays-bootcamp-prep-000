var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray (array, element) {

return [element, ...array]

}


function destructivelyAddElementToBeginningOfArray (a, b) {

      a.unshift(b)
      return a
}


function addElementToEndOfArray (a,b) {
return  [...a,b]


}




function destructivelyRemoveElementFromEndOfArray  (a) {

  a.pop()
  return a
}


function removeElementFromEndOfArray (a) {

  a.slice(-1)
}


function accessElementInArray(a,b) {

  return a[b]

}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift()
  return a
}

function removeElementFromBeginningOfArray (a) {
  newarr = a.slice(1)
  return newarr
}

function removeElementFromEndOfArray (a) {

var newarr = a.slice(0,-1)

return newarr

}

function destructivelyAddElementToEndOfArray (a,b) {
a.push(b)
return a
}
