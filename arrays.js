var chocolateBars =["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(a,b){
  var c = [b,...a]
  return c
}

function destructivelyAddElementToBeginningOfArray(a,b){
a.unshift(b)
  return a
}

function addElementToEndOfArray(a,b){
  return [...a,b]
}

function destructivelyAddElementToEndOfArray(a,b){
a.push(b)
  return a
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(0)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}
