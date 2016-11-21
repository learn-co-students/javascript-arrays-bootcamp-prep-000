var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(){
  var four = [1];
  four.unshift("foo");
  return four;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(){
  var six = [1];
  six.push('foo');
  return six;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(){
  var eight = [1, 2, 3];
  return eight[2];
}

function destructivelyRemoveElementFromBeginningOfArray(){
  var nine = [1, 2, 3];
  return nine.shift();
}

function removeElementFromBeginningOfArray(){
  var ten = [1, 2, 3];
   return ten.slice(-2);
}

function destructivelyRemoveElementFromEndOfArray(){
  var eleven = [1, 2, 3]
  eleven = eleven.pop();
  return eleven;
}

function removeElementFromEndOfArray(){
  var twelve = [1, 2, 3];
  return twelve.slice(0, twelve.length - 1);
}
