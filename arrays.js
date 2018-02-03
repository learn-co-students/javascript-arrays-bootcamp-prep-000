var chocolateBars = [
  'snicers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray (array,element){
  array=[element,...array]
  return array
}
addElementToBeginningOfArray (["a","b","c"])

function destructivelyAddElementToBeginningOfArray (array,element){
  array=[element,...array]
  return array
destructivelyAddElementToBeginningOfArray (["a","b","c"])
}

function addElementToEndOfArray (array,element){
  array=[...array,element]
  return array
}
addElementToEndOfArray (["a","b","c"])

function destructivelyAddElementToEndOfArray (aaray,element){
  array=[...array,element]
  return array
}
destructivelyAddElementToEndOfArray (["a","b","c"])

function destructivelyRemoveElementFromBeginningOfArray (array,element){
  array.shift()
}

function removeElementFromBeginningOfArray (array,element){
  array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array,element){
  array.pop()
}

function removeElementFromEndOfArray (array,element){
  array.slice(0,array.length - 1)
}
