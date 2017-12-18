var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
//var add = "Almond Joy"
function addElementToBeginningOfArray(chocolateBars,value){
  return [value, ...chocolateBars]
}

var cities = ['New York']
function destructivelyAddElementToBeginningOfArray(cities,value){
  cities.unshift(value);
  return cities
}
var endArray=["1"]
function addElementToEndOfArray(endArray,value){
  
  return [...endArray,value ]
}
function destructivelyAddElementToEndOfArray(endArray,value){
  endArray.push(value)
  return endArray
}
var accessArray = ["A","B","C"]
function accessElementInArray(accessArray,value){
  return accessArray[value]
}
function destructivelyRemoveElementFromBeginningOfArray(accessArray){
  accessArray.shift()
  return accessArray
}
var newArray = ["100","101","102"]
function removeElementFromBeginningOfArray(newArray){
  newArray = newArray.slice(1)
  return newArray
}
var array1 = ["E","F","G"]
function destructivelyRemoveElementFromEndOfArray(array1){
 array1.pop()
 return array1
}

var array2 =  ["E","F","G"]
function removeElementFromEndOfArray(array2){
 array2 = array2.slice(0,array2.length - 1)
 return array2
}