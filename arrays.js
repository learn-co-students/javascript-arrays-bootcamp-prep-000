var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element){
  var sweets=[element,...array]
  return sweets
}

function destructivelyAddElementToBeginningOfArray(array,string){
  array.unshift(string)
  return array
}

function destructivelyAddElementToEndOfArray(array,string){
  array.push(string)
  return array
}

function addElementToEndOfArray(array,string){
  var sweets = [...array, string]
  console.log(sweets)
  return sweets
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var removed = array.slice(0, array.length - 1)
  return removed
}
