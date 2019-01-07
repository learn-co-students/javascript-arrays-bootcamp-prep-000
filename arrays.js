var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'];
  
  function addElementToBeginningOfArray() {
   ["spree",...chocolateBars];
    return chocolateBars
  }
  
  function destructivelyAddElementToBeginningOfArray() { chocolateBars.unshift("starburst")
     return chocolateBars
  }
  
  function addElementToEndOfArray() {
    [...chocolateBars, "spree"]
    return chocolateBars
  }
  
  function destructivelyAddElementToEndOfArray() {
    chocolateBars.push("starburst");
    return chocolateBars
  }
  
  
  function accessElementInArray(){
    return chocolateBars[2]
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(){
    chocolateBars.shift()
    return chocolateBars
  }
  
  function removeElementFromBeginningOfArray() {
    chocolateBars = chocolateBars.slice(1)
    return chocolateBars
  }
  
  function destructivelyRemoveElementFromEndOfArray() {
    chocolateBars.pop()
    return chocolateBars
  }
  
  function removeElementFromEndOfArray() {
    chocolateBars.slice(0,
    chocolateBars.length - 1)
    return chocolateBars
  }
  