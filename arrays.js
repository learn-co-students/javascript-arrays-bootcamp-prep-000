// There should be some information provided in this section regarding naming conventions of functions.
// Long or intricate names can introduce problems due to human error.

/*  NOTE:
    I am submitting this using more advanced syntax than the lab requests.
    I am doing this to utilize some of what I already know within the context of the assignment.
    I am unable to get the tests to recognize my variables correctly despite editing this file.
    I am electing to move on rather than engage in a fruitless struggle against the testing system.
*/

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

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
};

function destructivelyAddElementToBeginningOfArray(array, element)
{
  var result = false;
  try
  {
    result = array.unshift(element);
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
};

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
};

function destrucivelyAddElementToEndOfArray(array, element)
{
  var result = false;
  try
  {
    result = array.push(element);
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
};

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
};

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
};

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  var result = false;
  try
  {
    result = array.shift();
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
};

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
};

function destructivelyRemoveElementFromEndOfArray(array)
{
  var result = false;
  try
  {
    result = array.pop();
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
};

function destructivelyRemoveElementFromMiddleOfArray(array)
{
  var result = false;
  var middle = Math.round(array.length * 0.5) - 1;
  try
  {
    result = array.splice(middle, 1);
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
};
