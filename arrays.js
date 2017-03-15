var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

new_array = new Array();

function addElementToBeginningOfArray (array, element)
{
  //new_array = new Array();
  new_array = array;
  return [element, ...new_array]
}

function destructivelyAddElementToBeginningOfArray (array, element)
{
   array.unshift(element)
   return array
}

function addElementToEndOfArray (array, element)
{
  new_array = array;
  new_array.push(element);
  return new_array;
}


function destructivelyAddElementToEndOfArray (array, element)
{
  array.push(element);
  return array;
}

function accessElementInArray (array, index)
{
  new_array = array;
  new_index = new_array[index];
  return new_index;
}

function destructivelyRemoveElementFromBeginningOfArray (array)
{
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array)
{
  new_array = array;
  new_array.shift();
  return new_array;
}

function removeElementFromEndOfArray  (array)
{
  new_array = array;
  new_array.pop();
  return new_array;
}

function destructivelyRemoveElementFromEndOfArray (array)
{
  array.pop();
  return array;
}
