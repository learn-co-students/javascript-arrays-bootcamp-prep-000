var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var myarray =[1,2,3];
var x = "Twix";
function addElementToBeginningOfArray(myarray, x) {
  var y = [x, ...myarray];
  return y;
}



function destructivelyAddElementToBeginningOfArray(myarray, x) {
  myarray.unshift(x);
  return myarray;
}



var array2 = [3,2,1];
var z;
function addElementToEndOfArray(array2, x) {
  var array3 = [...array2, x];
  return array3;
}

function destructivelyAddElementToEndOfArray(array2, x) {
array2.push(x);
  return array2;
}



var number = [1,2,3];
number[2] = 3;
function accessElementInArray(number) {
  return number[2];
}



var sfchar = ['ryu', 'ken', 'blanka'];
function destructivelyRemoveElementFromBeginningOfArray(sfchar) {
  sfchar.shift();
 return sfchar
}
  



var cats = ["Milo", "Garfield", "Otis"];
function removeElementFromBeginningOfArray(cats) {
  cats =cats.slice(1);
  return cats;
}



var iceCreams = ["chocolate", "vanilla", "raspberry"];
function destructivelyRemoveElementFromEndOfArray(iceCreams) {
  iceCreams.pop();
  return iceCreams;
}


var steed = ['horse', 'camel', 'kangaroo']

function removeElementFromEndOfArray(steed) {
  steed = steed.slice(0, steed.length - 1);
  return steed;
}
