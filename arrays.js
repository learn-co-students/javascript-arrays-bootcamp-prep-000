var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element){
  [chocolateBars, 'foo']
}

function destructivelyAddElementToBeginningOfArray(array,element){
   chocolateBars.unshift("foo")
}

function addElementToEndOfArray(){
  return [...chocolateBars, 'foo'];

}

function destructivelyAddElementToEndOfArray(){
  chocolateBars.push('foo')
}

function accessElementInArray(){

}
