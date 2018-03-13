var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];
  
  function addElementToBeginningOfArray(chocolateBars, string) {
    string = "foo";
    return [string,...chocolateBars];
  }
  
  function destructivelyAddElementToBeginningOfArray(chocolateBars, string) {
    chocolateBars.unshift(string);
    return chocolateBars;
  }
  
  function addElementToEndOfArray(chocolateBars,string) {
    return [...chocolateBars,string];
  }
  
  function destructivelyAddElementToEndOfArray(chocolateBars, string) {
    chocolateBars.push(string);
    return chocolateBars;
  }
  
  function accessElementInArray(chocolateBars, index) {
    return chocolateBars[index];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift();
    return array;
  }
  
  function removeElementFromBeginningOfArray(array) {
    array = array.slice(1);
    return array;
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop();
    return array;
  }
  
  function removeElementFromEndOfArray(array) {
    array = array.slice(0,array.length - 1);
    return array;
  }
  
  