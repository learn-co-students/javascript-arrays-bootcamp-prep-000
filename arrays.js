var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [1];
var element = 'foo';

// function addElementToBeginningOfArray add an element to the beginning of an array

function addElementToBeginningOfArray(array,element)
{
      var arr = array;
      arr.unshift(element);
      return arr;
}

// this function adds an element to the beginning of an array
function destructivelyAddElementToBeginningOfArray(array, element)
{
      array.unshift(element);
      return array;
}

function addElementToEndOfArray(array, element)
{
      var arr = array;
      arr.push(element);
      return arr;
}

function destructivelyAddElementToEndOfArray(array, element)
{
      array.push(element);
      return array;
}

var index = 2;
function accessElementInArray(array, index)
{
     return array[index];
}


function destructivelyRemoveElementFromBeginningOfArray(array)
{
     array.shift();
     return array;
}

function removeElementFromBeginningOfArray(array)
{
     return array.slice(1);
}

function removeElementFromEndOfArray(array)
{
    array.pop();
    return array;
}
