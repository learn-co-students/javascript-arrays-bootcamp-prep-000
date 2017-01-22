var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese";
var ingredient4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";

var grilledCheeseIngredients = ['bread','mild cheese','sharp cheese','butter','tomato','garlic'];
var tomatoSauceIngredients = ['tomato','garlic','olive oil','basil','oregano'];

var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(arr,e){
    var newArray = arr;

    newArray.unshift(e);
    return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr,e){
    arr.unshift(e);
    return arr;
}

function addElementToEndOfArray(arr,e){
    var newArray = arr;
    newArray.push(e);
    return newArray;

}

function destructivelyAddElementToEndOfArray(arr,e){
    arr.push(e);
}

function accessElementInArray(arr,index){
    return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
    arr.shift();
    return arr;
}

function removeElementFromBeginningOfArray(arr){
    var sliced = arr;
    sliced.slice(1);
    return sliced;
}

function destructivelyRemoveElementFromEndOfArray(arr){
    arr.pop();
    return arr;

}

 function removeElementFromEndOfArray(arr){
     var removed = arr;
     removed.slice(0,removed.length-1);
     return removed;
 }
