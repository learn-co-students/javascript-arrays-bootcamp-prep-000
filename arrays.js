var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
  ];
  
  function addElementToBeginningOfArray(chocolateBars, Hersheys){
    return [Hersheys, ...chocolateBars]
  ;}
  
  function destructivelyAddElementToBeginningOfArray(chocolateBars,junk){
    chocolateBars.unshift(junk);
    return chocolateBars
  ;}
  
  function addElementToEndOfArray(chocolateBars, Garbage){
    return [...chocolateBars, Garbage]
  ;}
  
  function destructivelyAddElementToEndOfArray(chocolateBars, crap){
    chocolateBars.push(crap);
    return chocolateBars
  ;}
  
  function removeElementFromBeginningOfArray(chocolateBars){
    return chocolateBars.slice(1)
  ;}
  
  function destructivelyRemoveElementFromEndOfArray(chocolateBars){
    chocolateBars.pop();
    return(chocolateBars)
  ;}
  
  function removeElementFromEndOfArray(chocolateBars){
    return chocolateBars.slice(0, chocolateBars.length -1)
    ;}
    
    function accessElementInArray(chocolateBars, kitkat) {
 return chocolateBars[kitkat]; 
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}
  
  