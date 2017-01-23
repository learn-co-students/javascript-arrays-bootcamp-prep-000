var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element ){
  var array = ["elemet1", "element2", "element3"];
  array.unshift("element4");
}

//function addElementToBeginningOfArray(array, element ){
  //var array = ["elemet1", "element2", "element3"];
  //return ["foo", "1", ...array];
  //arr1ay();
  //var array = "foo";
  //var element = 1;
  //return (array, element);
//}

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

//function destructivelyAddElementToBeginningOfArray(array, element); {
  //  array.unshift ("element");
    //return array;
  //}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray (array, element){
return [...array, element];
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}

/*function accessElementInArray(array, index){
  //return array[index];
//}

function accessElementInArray(array, index){
  return array(index);
}*/

function accessElementInArray(array, index){
  return array[index]
}


function removeElementFromEndOfArray(array){
  array.pop();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.slice(0, array.length -1)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
