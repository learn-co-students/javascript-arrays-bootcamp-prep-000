var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray() {
  [...chocolateBars, "foo"]
  console.log(chocolateBars);

}
function destructivelyAddElementToBeginningOfArray() {
  const chocolateBars = "foo"
  chocolateBars.unshift("foo")
  console.log(chocolateBars);

}
function addElementToEndOfArray() {
  chocolateBars.push("foo")

}
function destructivelyAddElementToEndOfArray() {
  [...chocolateBars, "foo"]
  chocolateBars.push("foo")

}
