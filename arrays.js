var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (){
  var myArray = [0, 1]
  myNewArray = myArray.unshift ('foo')
  return myNewArray
}

function destructivelyAddElementToBeginningOfArray (){
  var myArray = [0, 1]
  return ['foo'...myArray]
}

function addElementToEndOfArray (){
  var myArray = [0, 1]
  myNewArray = myArray.push ('foo')
  return myNewArray
}

function destructivelyAddElementToEndOfArray (){
  var myArray = [0, 1]
  return [myArray...'foo']
}
