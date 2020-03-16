var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element)
{
chocolateBars.unshift("Connor")

}


function destructivelyAddElementToBeginningOfArray(array, element)
{
  chocolateBars = ["Connor", ...chocolateBars]

}
return addElementToBeginningOfArray()
return destructivelyAddElementToBeginningOfArray()
