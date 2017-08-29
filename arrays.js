var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = [1];
addElementToBeginningOfArray.unshift('foo');

const array = [1];
addElementToBeginningOfArray = ['foo', ...array];


var destructivelyAddElementToBeginningOfArray = [1];
destructivelyAddElementToBeginningOfArray.unshift('foo');

const array = [1];
const destructivelyAddElementToBeginningOfArray = ['foo', ...array];
