var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles' ];

var addElementToBeginningOfArray = function(array, element){
var Myarray = [1];
      return ['foo', ...Myarray];

};

var destructivelyAddElementToBeginningOfArray = function(array, element){


 array.unshift("foo");
return array;
};


var addElementToEndOfArray= function(array, element){
  var Myarray = [1];

    return [...Myarray, 'foo'];
};

var destructivelyAddElementToEndOfArray =  function(array, element){


   array.push('foo');

return array;

};

var accessElementInArray = function(array, index){
    var Myarray = [1,2,3];
var element = Myarray[2];
  return element;
};
var destructivelyRemoveElementFromBeginningOfArray = function(array){
  var Myarray = [1];

  return Myarray.shift();
};
var removeElementFromBeginningOfArray = function(array){
  var Myarray = [1,2,3];

   Myarray.shift();
   return Myarray;

};

var removeElementFromEndOfArray = function(array){
  var Myarray = [1,2,3];

 Myarray.pop();
 return Myarray
};
