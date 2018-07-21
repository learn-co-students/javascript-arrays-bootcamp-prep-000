var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray() {
  chocolateBars = ['foo', ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift('foo')
}
