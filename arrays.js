var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles' ]

function destructivelyAddElementToBeginningOfArray(array, element) 
{ 
  array.unshift(element);
  return array;
}
function addElementToBeginningOfArray(array, element)
{
let array2 = [];
for (var x = 0; x < array.length; x++){
array2.push(array[x]);
}
array2.unshift(element);
return array2;
}
function addElementToEndOfArray(array, element)
{
let array3 = [];
for (var x = 0; x < array.length; x++){
array3.push(array[x]);
}
array3.push(element);
return array3;
}
function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element);
  return array;
}
function accessElementInArray(array,index) 
{
  return(array[index]);
}
function destructivelyRemoveElementFromBeginningOfArray(array) 
{
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array)
{
array3 = []; 
array.forEach((val, index) => {
    array3.push(val);
});
array3.shift();
return array3;
}
function destructivelyRemoveElementFromEndOfArray(array)
{ 
  array.pop();
  return array;
}  

function removeElementFromEndOfArray(array)
{
  array4 = [];
  array.forEach((val,index) => {
  array4.push(val);
  });
  array4.pop();
  return array4;
}  
