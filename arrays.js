var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = [
  "snickers",
  "hundred grand",
  "kit kat",
  "skittles"
  ]
  
 function addElementToBeginningOfArray(cars, honda) {
    return ["honda", ..."cars"]
  }
  
  function destructivelyAddElementToBeginningOfArray(cars, honda) {
    honda.unshift(cars);
    return cars;
  }
  
  