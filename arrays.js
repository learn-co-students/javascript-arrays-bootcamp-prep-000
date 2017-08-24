var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var newArr = [];
  for (var i = 0; i<array.length; i++){
    newArr[i] = array[i];
  }
  newArr.unshift(element);
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var newArr = [];
  for (var i = 0; i<array.length; i++){
    newArr[i] = array[i];
  }
  newArr.push(element);
  return newArr;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;

}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  array = array.slice(0,2);
  return array;
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1,array.length);
  return array;
}

console.log(addElementToBeginningOfArray(chocolateBars, 'candy'));
console.log(chocolateBars);




/*var cities = ["New York", "San Francisco"]
cities.unshift("Philadelphia")
console.log(cities)*/
