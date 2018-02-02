var chocolateBars = [`snickers`,`hundred grand`,`kitkat`,`skittles`]



function addElementToBeginningOfArray(Array, String)
{
  var answer = [String,...Array]
  return answer
}

function destructivelyAddElementToBeginningOfArray(Array,String)
{
  Array.unshift(`${String}`)
  return Array
}

function addElementToEndOfArray(var1,var2)
{
  var var3 = [...var1, var2]
  return var3
}

function destructivelyAddElementToEndOfArray(var1,var2)
{
  var1.push(var2)
  return var1
}

function accessElementInArray(var1,var2)
{
  return var1[var2];
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(Array)
{
  return Array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(Array)
{
  Array.pop()
  return Array
}


function removeElementFromEndOfArray(Array)
{
  return Array.slice(0,2)
}
