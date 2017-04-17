var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray() {
  ["foo", ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift("foo");
}
