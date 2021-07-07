var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];





var cities = ["New York", "San Francisco"];
 
var cities2 = "Philadelphia";


function addElementToBeginningOfArray(array, element) {
  newarray = [`${element}`, ...array,];
  return(newarray);
}

addElementToBeginningOfArray(cities,cities2);
console.log(cities);
console.log(newarray);


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(`${element}`);
  return array;
}

destructivelyAddElementToBeginningOfArray(cities,cities2);
console.log(cities);



cities = ["New York", "San Francisco"];
cities2 = "Philadelphia";


function addElementToEndOfArray(array, element) {
  newarray = [...array, `${element}`];
  return(newarray);
}

addElementToEndOfArray(cities,cities2);
console.log(cities);
console.log(newarray);


function destructivelyAddElementToEndOfArray(array, element) {
  array.push(`${element}`);
  return array;
}

destructivelyAddElementToEndOfArray(cities,cities2);
console.log(cities);




function accessElementInArray(array, index) {
  return array[index];
}

a = ["a", "b"];
index = 1;

console.log(accessElementInArray(a,index));

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

destructivelyRemoveElementFromBeginningOfArray(a);
console.log(a);

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

a = ["a", "b", "c"];
console.log(removeElementFromBeginningOfArray(a));
console.log(a);

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1);
}





