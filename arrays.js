var chocolateBars=["snickers","hundred grad","kitkat","skittles"];
function addElementToBeginningOfArray(array,item){var array2=[item, ...array];return array2}
function destructivelyAddElementToBeginningOfArray(array,item){ array.unshift(item);return array;}
function addElementToEndOfArray(array,item){var array2=[...array,item];return array2}
function destructivelyAddElementToEndOfArray(array,item){array.push(item);return array}
function accessElementInArray(array,index){return array[index]}
function destructivelyRemoveElementFromBeginningOfArray(array){array.shift();return array}
function removeElementFromBeginningOfArray(array){return array.slice(1,array.length);}
function destructivelyRemoveElementFromEndOfArray(array){array.pop(); return array;}
function removeElementFromEndOfArray(array){return array.slice(0,-1);}