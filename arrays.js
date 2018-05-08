var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(testArray ,element)
{
   var newtestArray = [element , ...testArray ]
 
  return newtestArray
}

function destructivelyAddElementToBeginningOfArray(testArray ,element)
{
   testArray.unshift(element)
  return testArray
}


function accessElementInArray(testArray, index)
{
  return testArray[index]
}

function addElementToEndOfArray(testArray,element)
{
  var newtestArray = [...testArray,element]
  return newtestArray
}

function destructivelyAddElementToEndOfArray(testArray,element)
{
  testArray.push(element)
  return testArray
}

function destructivelyRemoveElementFromBeginningOfArray(testArray){
  testArray.shift()
  return testArray
}

function removeElementFromBeginningOfArray(testArray)
{
   var newtestArray = testArray.slice(1)
  return newtestArray
}

function destructivelyRemoveElementFromEndOfArray(testArray)
{
  testArray.pop()
  return testArray
}

function removeElementFromEndOfArray(testArray)
{
  var newtestArray = testArray.slice(0,testArray.length-1)
  return newtestArray
}