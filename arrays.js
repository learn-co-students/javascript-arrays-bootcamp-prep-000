var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]


function addElementToBeginningOfArray(ar,el) {
  return [el,...ar]
}

function destructivelyAddElementToBeginningOfArray(ar,el) {
  var tst = ar.unshift(el)
  return ar
}

function addElementToEndOfArray(ar,el) {
  return [...ar,el]
}

function destructivelyAddElementToEndOfArray(ar,el) {
    var tst = ar.push(el)
   return ar
}

function accessElementInArray(ar,n) {
  return ar[n]
}

function destructivelyRemoveElementFromBeginningOfArray(ar,el) {
    var tst = ar.shift()
    return ar
}

function removeElementFromBeginningOfArray(ar,el) {
    return ar.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(ar) {
    var tst = ar.pop()
    return ar
}

function removeElementFromEndOfArray(ar) {
    return ar.slice(0, ar.length-1)
}
