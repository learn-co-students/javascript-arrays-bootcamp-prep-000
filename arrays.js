var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

/*function example(a, b) {
  chocolateBars.unshift('mars')
}
*/

//i MAY HAVE BEEN DOING THIS ALL BACKWARDS. UNSHIFT IS DESTRUCTIVE/MUTATES. [...ARRAY] PRESERVES! wILL DO AGAIN.
/*
var array = []
function addElementToBeginningOfArray(array, item){
  array.unshift(item)
  return array
}

//OMG I had so much troube with this problem only because i didnt add {} to function below. UGH!



function destructivelyAddElementToBeginningOfArray(array, item){
  var arrayNew = [item, ...array] //Important here is to assign it to the variable to preserve arrray
  return arrayNew
}

function addElementToEndOfArray(array, item) {
  array.push(item)
  return array
}

function destructivelyAddElementToEndOfArray(array, item){
  var newNewArray = [...array, item]
  return newNewArray
}
*/

var array = []
function addElementToBeginningOfArray(array, item){
var newArray = [item, ...array] //asign to varriable to preserve
return newArray

}

function destructivelyAddElementToBeginningOfArray(array, item) {
  array.unshift(item) //dont need to assign variable because rebuilt array
  return array
}

function addElementToEndOfArray(array, item){
var newNewArray = [...array, item]
return newNewArray
}

function destructivelyAddElementToEndOfArray(array, item) {
  array.push(item)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(foo){
  foo.shift()
  return foo
}
function removeElementFromBeginningOfArray(foo) {
  var newFoo = foo.slice(1)
  return newFoo
}


function destructivelyRemoveElementFromEndOfArray(array){
  array.pop() //mutates
  return array
}

function removeElementFromEndOfArray(array){
  arrayANew = array.slice(0, array.length - 1)
  return arrayANew
}

var testArray = ["Fee", "Fi", "Fo", "Fum"]
function accessElementInArray(testArray, index){
return testArray[index]
}
