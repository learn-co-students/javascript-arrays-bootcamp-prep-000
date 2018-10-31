// There should be some information provided in this section regarding naming conventions of functions.
// Long or intricate names can introduce problems due to human error.

/*  NOTE:
    I am submitting this using more advanced syntax than the lab requests.
    I am doing this to utilize some of what I already know within the context of the assignment.
    Previous difficulties with tests revealed a missing closing brace (}) was the culprit.
*/

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element)
{
  var result = false; // if the function returns false, external logic can be alerted to the problem
  try // provide error checking
  {
    result = [element, ...array];
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result; // return result regardless
  }
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  var result = false;
  try
  {
    array.unshift(element);
    result = array;
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function addElementToEndOfArray(array, element)
{
  var result = false;
  try
  {
    result = [...array, element];
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function destructivelyAddElementToEndOfArray(array, element)
{
  var result = false;
  try
  {
    array.push(element);
    result = array;
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function accessElementInArray(array, index)
{
  var result = false;
  try
  {
    result = array[index];
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function removeElementFromBeginningOfArray(array)
{
  var result = false;
  try
  {
    result = array.slice(1);
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  var result = false;
  try
  {
    array.shift();
    result = array;
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function removeElementFromEndOfArray(array)
{
  var result = false;
  try
  {
    result = array.slice(0, array.length - 1);
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  var result = false;
  try
  {
    array.pop();
    result = array;
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

// // //
// BONUS SECTION
// // //

function removeElementFromMiddleOfArray(array)
{
  var result = false;
  // calculate the midpoint of the array by rounding up, then subtracting one for correct index.
  var middle = Math.round(array.length * 0.5) - 1;
  try
  {
    result = [...array.slice(0,middle), ...array.slice(middle)];
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function destructivelyRemoveElementFromMiddleOfArray(array)
{
  var result = false;
  var middle = Math.round(array.length * 0.5) - 1;
  try
  {
    array.splice(middle, 1);
    result = array;
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}
