var chocolateBars = ['snickers', 'hundred grand','kitkat', 'skittles'];
function addElementToBeginningOfArray(a, b) { return [ b, ...a ] }
function destructivelyAddElementToBeginningOfArray(a, b) { a.unshift(b); return a }
function addElementToEndOfArray(a, b) { return [...a, b ] }
function destructivelyAddElementToEndOfArray(a, b) { a.push(b); return a }
function accessElementInArray(a, b) { return a[b] }
function destructivelyRemoveElementFromBeginningOfArray(a, b) { a.shift(b); return a }
function removeElementFromBeginningOfArray(a) { return a.slice(1) }
function destructivelyRemoveElementFromEndOfArray(a) { a.pop(); return a }
function removeElementFromEndOfArray(a) { return a.slice(0, a.length -1) }

addElementToBeginningOfArray(chocolateBars, 'm&ms');
destructivelyAddElementToBeginningOfArray(chocolateBars, 'starburst');
addElementToEndOfArray(chocolateBars, 'milky way');
destructivelyAddElementToEndOfArray(chocolateBars, 'mamba');
accessElementInArray(chocolateBars, 0);
destructivelyRemoveElementFromBeginningOfArray(chocolateBars, 0);
removeElementFromBegnningOfArray(chocolateBars);
destructivelyRemoveElementFromEndOfArray(chocolateBars);
removeElementFromEndOfArray(chocolateBars);