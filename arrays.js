// There should be some information provided in this section regarding naming conventions of functions.
// Long or intricate names can introduce problems due to human error.

/*  NOTE:
    I am submitting this using more advanced syntax than the lab requests.
    I am doing this to utilize some of what I already know within the context of the assignment.
*/

var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(arr, elem)
{
  var result = false; // if the function returns false, external logic can be alerted to the problem
  try // provide error checking
  {
    result = [elem, ...arr];
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result; // return result regardless
  }
};

function destructivelyAddElementToBeginningOfArray(arr, elem)
{
  var result = false;
  try
  {
    result = arr.unshift(elem);
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
};

function addElementToEndOfArray(arr, elem)
{
  var result = false;
  try
  {
    result = [...arr, elem];
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
};

function destrucivelyAddElementToEndOfArray(arr, elem)
{
  var result = false;
  try
  {
    result = arr.push(elem);
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
};

function accessElementInArray(arr, idx)
{
  var result = false;
  try
  {
    result = arr[idx];
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
};

function removeElementFromBeginningOfArray(arr)
{
  var result = false;
  try
  {
    result = arr.slice(1);
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
};

function destructivelyRemoveElementFromBeginningOfArray(arr)
{
  var result = false;
  try
  {
    result = arr.shift();
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
};

function removeElementFromEndOfArray(arr)
{
  var result = false;
  try
  {
    result = arr.slice(0, arr.length - 1);
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
};

function destructivelyRemoveElementFromEndOfArray(arr)
{
  var result = false;
  try
  {
    result = arr.pop();
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
};

// // //
// BONUS SECTION
// // //

function removeElementFromMiddleOfArray(arr)
{
  var result = false;
  // calculate the midpoint of the array by rounding up, then subtracting one for correct index.
  var middle = Math.round(arr.length * 0.5) - 1;
  try
  {
    result = [...arr.slice(0,middle), ...arr.slice(middle)];
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
};

function destructivelyRemoveElementFromMiddleOfArray(arr)
{
  var result = false;
  var middle = Math.round(arr.length * 0.5) - 1;
  try
  {
    result = arr.splice(middle, 1);
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
};
