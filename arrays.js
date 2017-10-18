var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = function(myArray){
var myArray = [1,2,3,4,5];
myNewArray = [35, ...myArray];

return myNewArray;
}

addElementToBeginningOfArray();


var destructivelyAddElementToBeginningOfArray = function(myArray){
  var myArray = [1,2,3,4,5];
  myArray = [35, ...myArray];

  return myArray;
  }

destructivelyAddElementToBeginningOfArray();


var addElementToEndOfArray = function(myArray){
  var myArray = [1,2,3,4,5];
  myNewArray = [...myArray, 35]
  return myNewArray;
}

addElementToEndOfArray();


var destructivelyAddElementToEndOfArray = function(myArray){
  var myArray = [1,2,3,4,5];
  myArray = [...myArray, 35]
  return myArray;
}

destructivelyAddElementToEndOfArray();


var accessElementInArray = function(){
var entrepreneurs = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna Huffington"];
return entrepreneurs[1]

}

accessElementInArray();

var destructivelyRemoveElementFromBeginningOfArray = function(){
const days = ["Monday", "Tuesday", "Wednesday"];
days.shift()
return days;

}
destructivelyRemoveElementFromBeginningOfArray();


var removeElementFromBeginningOfArray = function(cats){
var cats = ["Milo", "Garfield", "Otis"];
  cats.slice(1)
  return cats;
}
removeElementFromBeginningOfArray(cats);


var destructivelyRemoveElementFromEndOfArray = function(){
var iceCreams = ["chocolate", "vanilla", "raspberry"];
iceCreams.pop()
return iceCreams
}

destructivelyRemoveElementFromEndOfArray()


var removeElementFromEndOfArray = function(iceCreams){
var iceCreams = ["chocolate", "vanilla", "raspberry"];
 iceCreams.slice(0, iceCreams.length - 1)
return iceCreams
}

removeElementFromEndOfArray()
