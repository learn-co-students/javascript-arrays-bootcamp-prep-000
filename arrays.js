// var grilledCheeseIngredients = [
//   'bread',
//   'mild cheese',
//   'sharp cheese',
//   'butter',
//   'tomato',
//   'garlic'
// ]

//Array chocolateBars is an array containing snickers etc...//

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'snittles' ]

function addElementToBeginningOfArray(array,element){
array = [1]
element = ['foo',...array];
return element
}


function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift('foo');
return array
}

function addElementToEndOfArray(array, element){
array = ['foo']
element = [1, ...array  ];
return element
}


function destructivelyAddElementToEndOfArray(array, element){
array.push('foo');
return array
}

function accessElementInArray(array, index) {
// array = [1, 2, 3], 2;
return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
return array.slice(1)

}

function destructivelyRemoveElementFromEndOfArray(array) {
 array.pop()
return array
}


function removeElementFromEndOfArray(array) {
 return array.slice(0,array.length -1)
}




