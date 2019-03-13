var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  //done
  
  // note to self:  arrays are NOT indexed
  
  // access element
function accessElementInArray(array , index)
{
    return array[index];  //done
}

  // add element to beginning
function addElementToBeginningOfArray(array , element)
{
  return [element , ...array];  //done
}

// add element to end
function addElementToEndOfArray(array , element)
{
  return [...array , element] //done
}

// U remove element from beginning
function removeElementFromBeginningOfArray(array)
{
   var newSlice = array.slice(1 , array.length)
   return newSlice
}

// destructively ADD an element to the BEGINNING
function destructivelyAddElementToBeginningOfArray(array , element)
{
  //return array.shift(element);
  //return array.unshift(element)
  array.unshift(element)
  return array
  
}

// destructively ADD an element to the END
function destructivelyAddElementToEndOfArray(array , element)
{
  array.push(element)
  return array
  //return array.push(element)
} 

// destructively REMOVE an element from the BEGINNING
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift();
  return array
}

// destrutively REMOVE an element from the END
function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop();
  return array;
}

// U REMOVE element from the END of an array
function removeElementFromEndOfArray(array)
{
    var newArray = array
    newArray = newArray.slice(0 , newArray.length-1)
    return newArray // done
}

// grabbing dinner, 5:57 3/12/19
// returning at 6:55
// brb 7:38