

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars);//


function addElementToBeginningOfArray() {
 let array = [1];
 array = (['foo',...array]);
 return array;
}




function destructivelyAddElementToBeginningOfArray () {
 let array = [1];
 array.unshift('foo');
 return array;
}




function addElementToEndOfArray() {
 let array = [1];
 array = [ 1, 'foo' ];
 return array;
}

function destructivelyAddElementToEndOfArray() {
 let array = [1];
array.push('foo')
 return array;
}




function accessElementInArray() {
let array = [1, 2, 3];
return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray() {
let array = [1, 2, 3];
array.shift();
 
array[0] = 2;
array[1] = 3;
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




  



      








  