var chocolateBars = 
["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(name)
{ chocolateBars.push(name)
}

function destrusctivelyAddElementToBeginningOfArray(name)
{ chocolateBars.unshift(name)
}

function addElementToEndOfArray()
{ chocolateBars.pop()
}

function destrusctivelyAddElementToEndOfArray()
{ chocolateBars.shift()
}

function accessElementInArray(name)
{ return [...chocolateBars, name]
}

function destructivelyRemoveElementFromBeginningOfArray(name)
{ return [name, ...chocolateBars]
}
  
function removeElementFromBeginningOfArray()
{ return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray()
{return chocolateBars.pop(0, chocolateBars.length - 1)
}

function removeElementFromEndOfArray()
{return chocolateBars.slice(0, chocolateBars.length - 1)
}