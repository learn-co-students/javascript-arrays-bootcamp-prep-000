function addElementToBeginningOfArray(x,y){

  return ([y,...x])
}

function destructivelyAddElementToBeginningOfArray(x,y){
  x.unshift(y)
  return x
}

function addElementToEndOfArray(x,y){
  var z =[...x,y]
  return (z)
}
function destructivelyAddElementToEndOfArray(x,y){
  x.push(y)
  return x
}

function accessElementInArray(x,y){
  return x[y]
}

function destructivelyRemoveElementFromBeginningOfArray(x){
  x.shift()
  return x
}

function removeElementFromBeginningOfArray(x){
  return (x.slice(1))
}

function removeElementFromEndOfArray(x){
  return(x.slice(0,x.length-1))
}

var chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles']
