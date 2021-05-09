var chocolateBars = [
  'snickers', 'hundred grand','kitkat', 'skittles'];
function addElementToBeginningOfArray (array,element){ //done
  var new_array = [element,...array]
  return new_array
}
function destructivelyAddElementToBeginningOfArray(array , element){//done
    array.unshift(element)
    return array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}  
function addElementToEndOfArray(array, element){      
    return [...array,element]
}   
}
function accessElementInArray(array, index){ // done
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){ //done
   array.shift()
   return array
}
function removeElementFromBeginningOfArray(array){ // done
  var removed = array.slice(1)
  return removed
}
function destructivelyRemoveElementFromEndOfArray(array){ //done
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){//done
  var new_array = array.slice(0,-1)
  return new_array
}