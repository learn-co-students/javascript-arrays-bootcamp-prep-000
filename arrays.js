var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray (){

  chocolateBars.unshift("Mars")
}

function addElementToBeginningOfArray () {
  var pizza = ["cheese", "dough"]
  pizza = ["basil", ...pizza]
}

function destructivelyAddElementToEndOfArray (){

  chocolateBars.push("tronky")
}

function addElementToEndOfArray() {

  chocolateBars = [...chocolateBars, "tronky"]
}

function accessElementInArray (){

  console.log(chocolateBars[1])
}


function destructivelyRemoveElementFromBeginningOfArray () {
  chocolateBars.shift(3)
}

function removeElementFromEndOfArray () {
  chocolateBars.slice(-0)
}

function destructivelyRemoveElementFromEndOfArray (chocolateBars) {
  chocolateBars.pop(0)
}
