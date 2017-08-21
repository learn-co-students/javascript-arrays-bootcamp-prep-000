var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var addElementToBeginningOfArray = (arr,e) => [e, ...arr];
var destructivelyAddElementToBeginningOfArray = (arr,e) => {arr.unshift(e); return arr}
var addElementToEndOfArray = (arr,e) => [...arr, e];
var destructivelyAddElementToEndOfArray = (arr,e) => {arr.push(e); return arr}
var accessElementInArray = (arr,e) => arr[e];
var destructivelyRemoveElementFromBeginningOfArray = arr => {arr.shift(); return arr}
var removeElementFromBeginningOfArray = arr => arr.slice(1);
var destructivelyRemoveElementFromEndOfArray = arr => {arr.pop(); return arr}
var removeElementFromEndOfArray = arr => arr.slice(0,arr.length-1);
