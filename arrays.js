function addElementToEndOfArray(arrary,n){
  var newarray = [...arrary]
  newarray.push(n)
  return(newarray)
}

function addElementToBeginningOfArray(arrary,n){
    var newarray = [...arrary]
    newarray.unshift(n)
    return(newarray)
}

var chocolateBars = ['snickers', 'hundred grand','kitkat','skittles']

function removeElementFromEndOfArray(arrary,n){
    var newarrary = [...arrary]
    newarrary.pop(n)
    return(newarrary)
}

function removeElementFromBeginningOfArray(arrary,n){
    var newarray = [...arrary]
    newarray.shift(n)
    return(newarray)
}

function destructivelyAddElementToEndOfArray(arrary,element){
    arrary.push(element)
    return(arrary)
}

function destructivelyRemoveElementFromEndOfArray(array,element){
    array.pop(element)
    return(array)
}
function destructivelyAddElementToBeginningOfArray(array,element){
    array.unshift(element)
    return(array)
}
function accessElementInArray(array,index){
  return(array[index])
}
function destructivelyRemoveElementFromBeginningOfArray(array,element){
   array.shift(element)
   return(array)
}
