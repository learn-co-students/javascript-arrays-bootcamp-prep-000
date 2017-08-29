var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ... array]
}

/*console.log("new")
console.log(addElementToBeginningOfArray(chocolateBars, "Hersheys"))
console.log("perserve")
console.log(chocolateBars)*/


function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

/*chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
destructivelyAddElementToBeginningOfArray(chocolateBars, "Hersheys")
console.log("destructive")
console.log(chocolateBars)*/

function addElementToEndOfArray(array, element){
  return [...array, element]
}

/*console.log("new")
console.log(addElementToEndOfArray(chocolateBars, "Hersheys"))
console.log("perserve")
console.log(chocolateBars)*/

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

/*chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
destructivelyAddElementToEndOfArray(chocolateBars, "Hersheys")
console.log("destructive")
console.log(chocolateBars)*/

function accessElementInArray(array, index){
  return array[index]
}

//console.log(accessElementInArray(chocolateBars, 2))

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

/*chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
destructivelyRemoveElementFromBeginningOfArray(chocolateBars, "Hersheys")
console.log("destructive")
console.log(chocolateBars)*/

//console.log(chocolateBars.slice(1))

function removeElementFromBeginningOfArray(array){
    return array.slice(1)
}

/*console.log("new")
console.log(removeElementFromBeginningOfArray(chocolateBars))
console.log("perserve")
console.log(chocolateBars)*/

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

// chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
// destructivelyRemoveElementFromEndOfArray(chocolateBars)
// console.log("destructive")
// console.log(chocolateBars)

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}

// console.log("new")
// console.log(removeElementFromEndOfArray(chocolateBars))
// console.log("perserve")
// console.log(chocolateBars)
