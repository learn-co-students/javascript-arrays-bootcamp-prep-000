var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(arrayOne,addValue){
  var mutatedArrayOne = [addValue, ...arrayOne]
  return mutatedArrayOne
}

function destructivelyAddElementToBeginningOfArray(arrayTwo,addSecondValue){
  arrayTwo.unshift(addSecondValue)
  return arrayTwo
}

function addElementToEndOfArray (arrayThree, addThirdValue ){
  var mutatedArrayThree = [...arrayThree, addThirdValue]
  return mutatedArrayThree
}

function destructivelyAddElementToEndOfArray (arrayFour,addSecondValue){
arrayFour.push(addSecondValue)
  return arrayFour
}

var countDown = [1,2,3]

function accessElementInArray(arrayOne, index){
  return arrayOne[index]
  
}

function destructivelyRemoveElementFromBeginningOfArray (arrayOne){
  arrayOne.shift()
  return arrayOne
}

destructivelyRemoveElementFromBeginningOfArray([1,2,3])

function removeElementFromBeginningOfArray (arrayOne){
  var slicedArrayOne = arrayOne.slice(1)
  return slicedArrayOne
}

removeElementFromBeginningOfArray([1,2,3])

function destructivelyRemoveElementFromEndOfArray (arrayFive){
  arrayFive.pop()
  return arrayFive
  
}

destructivelyRemoveElementFromEndOfArray([1,2])

function removeElementFromEndOfArray (arraySix){
  var slicedArraySix = arraySix.slice(0, arraySix.length-1)
  return slicedArraySix
}

removeElementFromEndOfArray([1,2])




