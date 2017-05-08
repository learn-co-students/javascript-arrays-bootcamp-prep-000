chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(array, foo){
  var one = array;
  var two = 'foo';

  one.unshift(two);
  return one;
}

function addElementToBeginningOfArray(array, foo){
  var one = array;
  var two = 'foo';
  var three = [...one];

  three.unshift(two);
  return three;
}

function destructivelyAddElementToEndOfArray(array, foo){
  var one = array;
  var two = 'foo';

  one.push(two);
  return one;
}

function addElementToEndOfArray(array, foo){
  var one = array;
  var two = 'foo';
  var three = [...one];

  three.push(two);
  return three;
}

function accessElementInArray(array, index){
  var one = array;
  return one[index];
}

function removeElementFromBeginningOfArray(array, foo){
  var one = array;
  var two = 'foo';
  var three = [...one];

  three.shift(two);
  return three;
}

function removeElementFromEndOfArray(array){
  var one = array;

  return one.slice(0, one.length - 1 );
}
