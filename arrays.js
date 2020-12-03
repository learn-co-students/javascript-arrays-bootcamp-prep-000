var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element){
  return ['foo', 1]
}

function destructivelyAddElementToBeginningOfArray(array,element){
 chocolateBars = ['foo',1]
}

function addElementToEndOfArray(array, element){
  return [1, 'foo'];
}

function destructivelyAddElementToEndOfArray(){
 return chocolateBars = [1, 'foo']
}

function accessElementInArray(array, index){
return chocolateBars[3]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return chocolateBars.shift()
}

function removeElementFromBeginningOfArray(array){
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(array){

}
