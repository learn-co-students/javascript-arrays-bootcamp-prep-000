var chocolateBars=['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(array, element) {array.unshift(element); return array}
function destructivelyRemoveElementFromBeginningOfArray(array) {array.shift(); return array}
function destructivelyAddElementToEndOfArray(array, element) {array.push(element); return array}
function destructivelyRemoveElementFromEndOfArray(array) {array.pop(); return array}
function addElementToBeginningOfArray(array, element) {return [element, ...array]}
function addElementToEndOfArray(array, element) {return [...array, element]}
function removeElementFromBeginningOfArray(array) {return array.slice(1)}
function removeElementFromEndOfArray(array) {return array.slice(0, array.length-1)}
function accessElementInArray(array, index) {return array[index]}
