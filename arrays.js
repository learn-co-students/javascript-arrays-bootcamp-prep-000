var chocolateBars=['snickers','hundred grand','kitkat','skittles']
function addElementToBeginningOfArray() {
  var test2=["testing2",2]
  ["testing_2", ...test2]
  test2
}

function destructivelyAddElementToBeginningOfArray() {
  var test1=["testing1",1]
  test1.unshift("testing_1")
}

function addElementToEndOfArray() {
  var test3=["testing3",3]
  [...test3,"testing_3"]
}

function destructivelyAddElementToEndOfArray() {
  var test4=["testing4",4]
  test1.push("testing_4")
}

function accessElementInArray() {
  var test5=["testing5",5]
  console.log(test5[0])
}

function destructivelyRemoveElementFromBeginningOfArray() {
const days = ["Monday", "Tuesday", "Wednesday"]
days.shift()
days
}

function removeElementFromBeginningOfArray() {
var cats = ["Milo", "Garfield", "Otis"]
cats.slice(-2)
cats
}

function destructivelyRemoveElementFromEndOfArray(){
var iceCreams = ["chocolate", "vanilla", "raspberry"]
iceCreams.pop() 
iceCreams
}

function removeElementFromEndOfArray(){
var iceCreams = ["chocolate", "vanilla", "raspberry"]
iceCreams.slice(0, iceCreams.length - 1) // ["chocolate", "vanilla"]
iceCreams // ["chocolate", "vanilla", "raspberry"]
}