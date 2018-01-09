var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(){
  var myArray = [1]
  myArray2=['foo', ...myArray]
  return myArray2
}

function destructivelyAddElementToBeginningOfArray() {
  var myArrayAlt = [1]
  myArrayAlt.unshift('foo')
  return myArrayAlt
}

function addElementToEndOfArray(){
  var myEndArray = [1]
  myEndArray2=[...myEndArray,'foo']
  return myEndArray2
}

function destructivelyAddElementToEndOfArray () {
  var myEndArrayX = [1]
  myEndArrayX.push('foo')
  return myEndArrayX
}

function accessElementInArray(){
  var arrayWithIndex = ['Taipei','Kaohsiung',3]
  return arrayWithIndex[2]
}

function destructivelyRemoveElementFromBeginningOfArray(){
  var arrayRm = [1,2,3]  
  arrayRm.shift()
  return arrayRm
}

function removeElementFromBeginningOfArray(){
    var arrayRmX = ['Taipei',2,3]
    var arrayRmX1 = arrayRmX.slice(1)
    return arrayRmX1
}

function destructivelyRemoveElementFromEndOfArray(){
  var arrayFun = [1,2,3]
  arrayFun.pop()
  return arrayFun
}

function removeElementFromEndOfArray(){
  var arrayFun = [1,2,'Waterslides']
  var arrayFun1= arrayFun.slice(0,arrayFun.length - 1)
  return arrayFun1
}