var ingredient1 ="bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"
var gailledCheeseIngredients=[
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
  ]
  var tomatoSauceIngredients = [
    'tomato',
    'garlic',
    'olive oil',
    'basil',
    'oregano'
    ]
    var chocolateBars = [
      'snicker',
      'hundred grand',
      'kitkat',
      'skittles']
      
      function addElementToBeginningOfArray(array, element){
         array = [element,...array];
        return array;
      }
      function destructivelyAddElementToBeginningOfArray(array,element)
      {
        var newArray = [];
        newArray=array;
         newArray.unshift(element)
        return newArray;
        
      }
      function addElementToEndOfArray(array,element){
        
        array = [...array,element];
        return array;
      }
      function destructivelyAddElementToEndOfArray(array,element){
        var newArray = array;
        array.push(element);
        return newArray
      }
      function accessElementInArray(array,index){
        var element = array[index];
        return element;
      }
      function destructivelyRemoveElementFromBeginningOfArray(array){
         var newArray = array
         newArray.shift();
         return newArray;
      }
      
      function removeElementFromBeginningOfArray(array){
       array = array.slice(1);
        return array;
      }
      function destructivelyRemoveElementFromEndOfArray(array){
        var newArray = array.pop();
        return array;
      }
      function removeElementFromEndOfArray(array){
     var tempArrary = array;
        var newArray = array.slice(0,array.length - 1);
        return newArray;
      }