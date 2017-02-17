var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (arr,str) => {return [str, ...arr];}

var destructivelyAddElementToBeginningOfArray = (arr,element) => {arr.unshift(element); return arr;}

var addElementToEndOfArray = (arr,element) => {return [...arr, element];};

var destructivelyAddElementToEndOfArray = (arr,element) => {arr.push(element); return arr};

var accessElementInArray = (arr,i) => {return arr[i];};

var destructivelyRemoveElementFromBeginningOfArray = arr => arr.shift();

var removeElementFromBeginningOfArray = arr => arr.slice(1);

var destructivelyRemoveElementFromEndOfArray = arr => arr.pop();

var removeElementFromEndOfArray = arr => arr.slice(0, arr.length-1);
