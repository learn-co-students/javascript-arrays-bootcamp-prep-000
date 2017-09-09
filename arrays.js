var chocolateBars = [ 'snickers','hundred grand','kitkat','skittles']
//console.log(chocolateBars)

//const array = [1]
//const element = 'foo'

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
//console.log(array)

function destructivelyAddElementToBeginningOfArray(array, element) {
      array.unshift(element);
  return array
}
//console.log(destructivelyAddElementToBeginningOfArray(array))

function addElementToEndOfArray(array,element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
      array.push(element);
  return array
}

function accessElementInArray(array,index) {
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
      array.shift()
  return array
}

var array = [1,2,3]

function removeElementFromBeginningOfArray(array){
      return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
      array.pop()
      return array
}

//cat = array.slice(0, array.length - 1 )
//console.log(array)

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length - 1 )
  return array
}
