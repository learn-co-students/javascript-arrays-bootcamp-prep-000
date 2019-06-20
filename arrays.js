var chocolateBars = [
  "snickers", "hundred grand", "kitkat","skittles"
  ]
  
function addElementToBeginningOfArray(array,element) {
  return array.unshift(element) 
  
}
function destructivelyAddElementToBeginningOfArray(array,element) {
  newarray = [element, ...array] 
  return newarray
  
}

cities = ["New York", "San Francisco"]
cities = ["Philadelphia", ...cities]
console.log(cities)