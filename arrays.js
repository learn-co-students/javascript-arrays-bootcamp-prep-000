var chocolateBars = [snickers, hundred grand, kitkat, skittles]

function addElementToBeginningOfArray(){
  var myArray = [three, two, one]
  ["four", ...myArray]
}

function destructivelyAddElementToBeginningOfArray() {
  var array = [one, two, three]
  array.unshift("zero")
}