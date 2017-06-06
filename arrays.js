// chocolateBars == [1], a == ''foo'
  // your arguments in the () are placeholders for some data coming in and is what makes our functions dynamic. Their values can be anything we give it during a function call.
  // when we define a function, our arguments can't be strings or any other data type, its just a name for those values coming in from the call.
  // so first thing - {} is your code block, the logic of your function lives inside


var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

// ok so we'll start with proper structure
function addElementToBeginningOfArray(w, a){
  return([a, ...w]) // here with the spreader operator we are creating a new array with [1, 'foo']
}

function destructivelyAddElementToBeginningOfArray(x, b)
{x.unshift(b)
return(x) }

//wht the hey
function addElementToEndOfArray(array1, c) {
  array11 = [...array1, c]
  return(array11)
}

function destructivelyAddElementToEndOfArray(z, d) {
  z.push(d)
  return(z)
}

function accessElementInArray(array2, n) {
  return(array2[n])
}

function destructivelyRemoveElementFromBeginningOfArray(array3) {
  array3.shift()
  return(array3)
}

function removeElementFromBeginningOfArray(array4) {
  array44 = array4.slice(1)
  return(array44)
}

function destructivelyRemoveElementFromEndOfArray(array5) {
  array5.pop()
  return(array5)
}

function removeElementFromEndOfArray(array6) {
  array66 = array6.slice(0, array6.length - 1)
  return(array66)
}
