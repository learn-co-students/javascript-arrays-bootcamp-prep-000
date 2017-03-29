var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element)
{
  var chocadd = [element,...array]

  return chocadd
}

addElementToBeginningOfArray(chocolateBars,"Lindt")

function destructivelyAddElementToBeginningOfArray(array,element)
{
  array.unshift(element)

  return array

}
destructivelyAddElementToBeginningOfArray(chocolateBars,"Lindt")

function addElementToEndOfArray(array,element)
{
  var chocplus = [...array,element]
  return chocplus
}
addElementToEndOfArray(chocolateBars,"Lindt")

function destructivelyAddElementToEndOfArray(array,element)
{
  array.push(element)  
  return array
}

destructivelyAddElementToEndOfArray(chocolateBars,"Lindt")

function accessElementInArray(array,index)
{
  return array[index]
}

accessElementInArray(chocolateBars,"Lindt")


function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift()
  return array
}

destructivelyRemoveElementFromBeginningOfArray(chocolateBars)

function removeElementFromBeginningOfArray(array)
{
  array = array.slice(1)
  return array
}

removeElementFromBeginningOfArray(chocolateBars)

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop()
  return array
}

destructivelyRemoveElementFromEndOfArray(chocolateBars)

function removeElementFromEndOfArray(array)
{
  array = array.slice(0,(array.length -1))
  return array
}

removeElementFromEndOfArray(chocolateBars)

