var chocolateBars = ['snickers', 'hundred grand','kitkat', 'skittles'];
function addElementToBeginningOfArray(a, b) { return [ b, ...a ] }
function destructivelyAddElementToBeginningOfArray(a, b) { return a.unshift(b) }
function addElementToEndOfArray(a, b) { return [ b, ...a ] }
function destructivelyAddElementToEndOfArray(a, b) { return a.push(b) }
function accessElementInArray(a, b) { return a[b] }
function destructivelyRemoveElementFromBeginningOfArray(a, b) { return a.shift(b) }
function removeElementFromBegnningOfArray(a) { return a.slice(1) }
function destructivelyRemoveElementFromEndOfArray(a) { return a.pop() }
function removeElementFromEndOfArray(a) { return a.slice(0, a.length, -1) }

destructivelyAddElementToBeginningOfArray(chocolateBars, 'starburst');
addElementToBeginningOfArray(chocolateBars, 'm&ms');
addElementToEndOfArray(chocolateBars, 'milky way');
destructivelyAddElementToEndOfArray(chocolateBars, 'mamba');
accessElementInArray(chocolateBars, 0);
destructivelyRemoveElementFromBeginningOfArray(chocolateBars, 0);
removeElementFromBegnningOfArray(chocolateBars);
destructivelyRemoveElementFromEndOfArray(chocolateBars);
removeElementFromEndOfArray(chocolateBars);