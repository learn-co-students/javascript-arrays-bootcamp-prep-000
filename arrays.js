var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]


/*Most modern browsers (Chrome, FireFox, and Safari) support what is called the spread operator — it's three dots in a row: .... When used with an array, it spreads out the array's contents.
We can use the spread operator to create a new array in place, rather than modifying the original one.
*/
function addElementToBeginningOfArray(array, element){
  array = [element, ...array]
  return array
}

/*These actions change the underlying array — in other words, they mutate its value.*/
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array, element){
  array.pop()
  return array
}

function removeElementFromBeginningOfArray(array, element){
  array = array.slice(1)
  return array
}

function removeElementFromEndOfArray(array, element){
  array = array.slice(0, array.length - 1)
  return array
}

