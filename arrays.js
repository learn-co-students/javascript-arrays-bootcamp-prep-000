var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,element) {return [...element, array]}

function addElementToBeginningOfArray(array,element) {return [element, ...array]}

function destructivelyAddElementToBeginningOfArray(array,element) {return array.unshift(element)}

function destructivelyAddElementToEndOfArray(array,element) {return array.push(element)}

function addElementToEndOfArray(array,element){array = [element, ...array]; return array;}

function removeElementFromEndOfArray(array){return array.slice(0, array.length - 1);}

function destructivelyAddElementToBeginningOfArray(array,element) {array.unshift(element); return array}

function addElementToEndOfArray(array,element){array = [...array, element]; return array;}

function destructivelyAddElementToEndOfArray(array,element) {array.push(element); return array}

function removeElementFromBeginningOfArray(array){return array.slice(1)}

function accessElementInArray(array,index){return array[index]}
