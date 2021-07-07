  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

  function addElementToBeginningOfArray (array, element) {
    const a = array;
    const b = [element, ...array];
    return b;
  }
  
  function destructivelyAddElementToBeginningOfArray (array, element) {
    var c = array;
    c.unshift(element);
    return c;
  }
  
  function addElementToEndOfArray (array, element) {
    const d = array;
    const e = [...array, element];
    return e;
  }
  
  function destructivelyAddElementToEndOfArray (array, element) {
    var f = array;
    f.push(element);
    return f
  }
  
  function accessElementInArray (array, index) {
    var g = array;
    var h = g[index];
    return h
  }
  
  function destructivelyRemoveElementFromBeginningOfArray (array) {
    var i = array;
    i.shift();
    return i;
  }
  
  function removeElementFromBeginningOfArray (array) {
    var j = array;
    j = j.slice(1);
    return j;
  }
  
  function destructivelyRemoveElementFromEndOfArray (array) {
    var k = array;
    k.pop();
    return k;
  }
  
  function removeElementFromEndOfArray (array) {
    var l = array;
    l = l.slice(0,-1);
    return l;
  }