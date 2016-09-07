var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = function(arr, el) {
   return [el, ...arr];
};

var destructivelyAddElementToBeginningOfArray = function(arr, el) {
    arr.unshift(el);
    return arr;
};

var addElementToEndOfArray = function(arr, el) {
   return [...arr, el];
};

var destructivelyAddElementToEndOfArray = function(arr, el) {
    arr.push(el);
    return arr;
}

var accessElementInArray = function(arr, index) {
  return arr[index];
}

var removeElementFromBeginningOfArray = function(arr) {
   arr.shift();
   return arr;
}

var removeElementFromEndOfArray = function(arr) {
   arr.pop();
   return arr;
}
