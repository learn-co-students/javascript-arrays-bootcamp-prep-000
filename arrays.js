

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars);//


function addElementToBeginningOfArray() {
 let array = [1];
 array = (['foo',...array]);
 return array;
}




function destructivelyAddElementToBeginningOfArray () {
var array1 = [1];
console.log(array1.unshift('foo'));
return array1;
}




function addElementToEndOfArray() {
 let array = [1];
 array = [ 1, 'foo' ];
 return array;
}

function destructivelyAddElementToEndOfArray() {
 let array = [1];
array.push('foo');
 return array;
}




function accessElementInArray() {
let array = [1, 2, 3];
return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray() {
var array = [1, 2, 3];
var destructivelyRemoveElementFromBeginningOfArray  = array.shift();
return array;
}



function removeElementFromBeginningOfArray() {
let array = [1, 2, 3];
array.shift();
return array;
}

function destructivelyRemoveElementFromEndOfArray(){
 let array = [1, 2, 3];
array.pop();
return array;
}
  


function removeElementFromEndOfArray () {
  let array = [1, 2, 3];
array.pop();
return array;
}




  



      








  