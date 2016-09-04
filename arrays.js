var chocolateBars =['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arg,element){
  return [element,...arg]
}

function destructivelyAddElementToBeginningOfArray(arg,element){
  arg.unshift(element)
  return arg
}

function addElementToEndOfArray(arg,element){
  return [...arg,element]
}

function destructivelyAddElementToEndOfArray(arg,element){
  arg.push(element)
  return arg
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.unshift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return arrray
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}
