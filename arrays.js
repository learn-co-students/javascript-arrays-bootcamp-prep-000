var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];
  
  function addElementToBeginningOfArray(chocolateBars, candyList) {
    return [candyList, ...chocolateBars];
  }
  
  function destructivelyAddElementToBeginningOfArray(chocolateBars, candyList) {
    chocolateBars.unshift(candyList);
    return chocolateBars;
  }
  
  function addElementToEndOfArray(chocolateBars, candyList) {
    return[...chocolateBars, candyList];
  }
  
  function destructivelyAddElementToEndOfArray(chocolateBars, candyList) {
    chocolateBars.push(candyList);
    return chocolateBars;
  }
  
  function accessElementInArray(chocolateBars, index) {
    return chocolateBars[0];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
    chocolateBars.shift();
    return chocolateBars;
  }
  
  function removeElementFromBeginningOfArray(chocolateBars) {
    return chocolateBars.slice(1);
  }
  
  function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
    chocolateBars.pop();
    return chocolateBars;
  }
  
  function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
  