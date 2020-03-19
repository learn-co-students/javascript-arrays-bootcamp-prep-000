var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element)
{
array = [element, ...array]
return array
}
addElementToBeginningOfArray(chocolateBars,"Connor")

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element)
return array
}
destructivelyAddElementToBeginningOfArray(chocolateBars, "Connor")

function addElementToEndOfArray(array, element)
{
  array = [...array, element]
  return array
}
addElementToEndOfArray(chocolateBars, "Connor")

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element)
  return array
}
destructivelyAddElementToEndOfArray(chocolateBars, "Connor")

//Accessing an element
function accessElementInArray(array, index)
{
  return array[index]
}
accessElementInArray(chocolateBars, 0)

//removing a element
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift()
  return array
}
destructivelyRemoveElementFromBeginningOfArray(chocolateBars)
//slicing
function removeElementFromBeginningOfArray(array)
{
  return array.slice(1)

}
 removeElementFromBeginningOfArray(chocolateBars)
 //from end of the array
 function destructivelyRemoveElementFromEndOfArray(array)
 {
   array.pop()
   return array
 }
destructivelyRemoveElementFromEndOfArray(chocolateBars)
//remove from end
function removeElementFromEndOfArray(array)
{
  return array.slice(0, array.length-1)
}
removeElementFromEndOfArray(chocolateBars)
