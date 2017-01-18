var chocolateBars = [snickers, hundred grand, kitkat, skittles];

function addElementToBeginningOfArray(){
  var array = ["1", "2", "3"]
  array.unshift("0")
}

function destructivelyAddElementToBeginningOfArray(){
  var array = ["1", "2", "3"]
  ["0", ...array]
  array;
}

function addElementToEndOfArray(){
  var array = ["1", "2", "3"]
  array.push("4")
}

function destructivelyAddElementToEndOfArray(){
  var array = ["1", "2", "3"]
  [...array, "4"]
}

function accessElementInArray(){
  var array = ["1", "2", "3"];
  console.log(array[1]);
}

function destructivelyRemoveElementFromBeginningOfArray(){
  const array = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  array.shift(2);
  return array;
}

function removeElementFromBeginningOfArray(){
  var array = ["Yo", "What", "You", "Up", "To"];
  array.slice(-4);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(){
  var array = ["Yo", "What", "You", "Up", "To"];
  array.pop();
  return array;
}

function removeElementFromEndOfArray(){
  var iceCreams = ["chocolate", "vanilla", "raspberry"];
  iceCreams.slice(0, iceCreams.length - 1);
  return iceCreams;
}
