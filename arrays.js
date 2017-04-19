var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array,element)
{
  ["element",...array]

}

function destructivelyAddElementToBeginningOfArray(array,element)
{
  // var array = [ ];
  array.unshift('foo');
}

function addElementToEndOfArray(array,element)
{
  // var array = [ ];
  [...array,"element"]
}

function destructivelyAddElementToEndOfArray() //array,element)
{
  // var array = [ ];
  // array.push('foo');
  array.push('foo');

}

function accessElementInArray(array,index)
{
  // var array;
  return array[index]
}
