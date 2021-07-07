var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = [
"bread",
"mild cheese",
"sharp cheese",
"butter",
"tomato",
"garlic"
]
var tomatoSauseIngredients = [
"tomato",
"garlic",
"olive oil",
"basil",
"oregano"
]

var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
  "mounds",
  "almond joys"
]

function addElementToBeginningOfArray(anArray, anElement){
  var theArray = anArray.slice(0) //JSON.parse(JSON.stringify(anArray))
  var theElement = anElement

  theArray.unshift(theElement)
  return theArray
}

function destructivelyAddElementToBeginningOfArray(anArray, anElement){
  var theArray = anArray;
  var theElement = anElement;

  theArray.unshift(theElement)
  return theArray
}

function addElementToEndOfArray(anArray, anElement){
  var theArray = anArray.slice(0) //JSON.parse(JSON.stringify(anArray))
  var theElement = anElement

  theArray.push(theElement)
  return theArray
}

function destructivelyAddElementToEndOfArray(anArray, anElement){
  var theArray = anArray;
  var theElement = anElement;

  theArray.push(theElement)
  return theArray
}
function accessElementInArray(anArray,anIndex){
    return anArray[anIndex]
}
function removeElementFromEndOfArray(anArray){
  anArray=anArray.slice(0,anArray.length-1)
  return anArray
}
function destructivelyRemoveElementFromEndOfArray(anArray){
  //anArray=anArray.pop()
  anArray.pop()
  return anArray
}

function removeElementFromMiddleOfArray (anArray, n){
  var theArray = anArray;
  var theIndex = n;
/*
  var theArrayStringified = JSON.stringify(anArray.slice(0,theIndex-1))+"+"+JSON.stringify(anArray.slice(theIndex,anArray.length))
  console.log(`Stringified Array: ${theArrayStringified}`);
  theArray=JSON.parse(theArrayStringified);
  var theArrayStringified=JSON.strigify(theArray);
*/
  theArray=anArray.slice(0,theIndex-1)
  var theArrayStringified=JSON.stringify(theArray);
  console.log(`Stringified Array: ${theArrayStringified}`);
}
// Process

var resultArray = [];

removeElementFromMiddleOfArray (chocolateBars, 3);


resultArray = addElementToBeginningOfArray(chocolateBars,"M&Ms")
console.log(`Add Beginning Original: ${JSON.stringify(chocolateBars)}`);
console.log(`Add Beginning Result: ${JSON.stringify(resultArray)}`);

//var returnArray =[]
resultArray = destructivelyAddElementToBeginningOfArray(chocolateBars,"M&Ms")
console.log(`Destructively Add Beginning Original: ${JSON.stringify(chocolateBars)}`)
console.log(`Destructively Add Beginning Result: ${JSON.stringify(resultArray)}`)

resultArray = addElementToEndOfArray(chocolateBars,"M&Ms")
console.log(`Add End Original: ${JSON.stringify(chocolateBars)}`);
console.log(`Add End Result: ${JSON.stringify(resultArray)}`);

//var returnArray =[]
resultArray = destructivelyAddElementToEndOfArray(chocolateBars,"M&Ms")
console.log(`Destructively Add End Original: ${JSON.stringify(chocolateBars)}`)
console.log(`Destructively Add End Result: ${JSON.stringify(resultArray)}`)


console.log(accessElementInArray(chocolateBars, 3));

resultArray = destructivelyRemoveElementFromEndOfArray(chocolateBars)
console.log(`Destructively remove End Original: ${JSON.stringify(chocolateBars)}`)
console.log(`Destructively Remove End Result: ${JSON.stringify(resultArray)}`)


resultArray = removeElementFromEndOfArray(chocolateBars);
console.log(`Remove End Original: ${JSON.stringify(chocolateBars)}`)
console.log(`Remove End Result: ${JSON.stringify(resultArray)}`)


//console.log(anArray[anArray.length-1])

//returnArray =

//console.log(returnArray[returnArray.length-1])
//console.log(returnArray[returnArray.length-2])
