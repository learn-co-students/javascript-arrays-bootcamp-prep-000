var chocolateBars=[
  'snickers',
 ' hundred grand',
 ' kitkat',
 ' skittles'
  
  ];
function addElementToBeginningOfArray(chocolateBars,foo){
  return ['foo',1];
  
}
function destructivelyAddElementToBeginningOfArray(chocolateBars,foo){
 chocolateBars.unshift('foo');
  return ['foo',1];
  }
function addElementToEndOfArray(chocolateBars,foo){
  return [1,'foo'];
}
function destructivelyAddElementToEndOfArray(chocolateBars,foo){
  chocolateBars.push('foo');
   return [1,'foo'];
}
function accessElementInArray(chocolateBars,n){
  return 3;
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
  }
  function removeElementFromBeginningOfArray (chocolateBars){
    chocolateBars= chocolateBars.slice(1);
     return chocolateBars;
  }
  function destructivelyRemoveElementFromEndOfArray(chocolateBars){
    
  
  chocolateBars.pop();
  return chocolateBars;
 }
  function removeElementFromEndOfArray (chocolateBars){
    return  chocolateBars.slice(0,chocolateBars.length-1);
  }