chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(inArray,inEle)
{
  return [inEle,...inArray]
}

function destructivelyAddElementToBeginningOfArray(inArray,inEle)
{
  inArray.unshift(inEle)

  return inArray
}

function addElementToEndOfArray(inArray,inEle)
{
    return [...inArray,inEle]

}


function destructivelyAddElementToEndOfArray(inArray,inEle)
{
  inArray.push(inEle)
    return inArray
}

function accessElementInArray(inArray,index)
{
  return inArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(inArray)
{
  inArray.shift()
  return inArray
}

function removeElementFromBeginningOfArray(inArray)
{
  return inArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(inArray)
{
  inArray.pop()
  return inArray
}

function removeElementFromEndOfArray(inArray)
{
  return inArray.slice(0,inArray.length - 1)
}
