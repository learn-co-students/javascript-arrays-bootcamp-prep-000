var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 =  "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ['snicker', "hundred grand", "kitkat", 'skittles']

var addElementToBeginningOfArray = function (array,element){
 return [element,...array]
 
}

var destructivelyAddElementToBeginningOfArray = function (array, element){
  array.unshift(element)
  return array
}


var addElementToEndOfArray = function (array,element){
 return [...array, element]
  
}

var destructivelyAddElementToEndOfArray = function (array, element){
  array.push(element)
  return array
}

var accessElementInArray = function(array, index){
  return array[index]
}

var destructivelyRemoveElementFromBeginningOfArray = function(array){
   array.shift()
   return array
}

var removeElementFromBeginningOfArray = function(array){
  const chocolateBars2 = array.slice(1)
  return chocolateBars2
}

var destructivelyRemoveElementFromEndOfArray = function(array){
    array.pop()
    return array
}

var removeElementFromEndOfArray = function(array){
  const chocolateBars3 = array.slice(0, array.length-1)
  return chocolateBars3
}

// var splice = function(array){
//   const chocolateBars4 = array.splice(2, 2, 7)
//   return array
// }
// console.log(addElementToBeginningOfArray(chocolateBars, "payday"));

// console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, "cars"));

// console.log(addElementToEndOfArray(chocolateBars,"heathbar"))

// console.log(destructivelyAddElementToEndOfArray(chocolateBars,"recesecup"))

// console.log(accessElementInArray(chocolateBars, 2))

// console.log(destructivelyRemoveElementFromBeginningOfArray(chocolateBars))

// console.log(removeElementFromBeginningOfArray(chocolateBars))

// console.log(destructivelyRemoveElementFromEndOfArray(chocolateBars))

//console.log(removeElementFromEndOfArray(chocolateBars))

// console.log(splice(chocolateBars))