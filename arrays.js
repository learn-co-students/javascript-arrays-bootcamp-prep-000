var chocolateBars = [
  'snickers'
  , 'hundred grand'
  , 'kitkat'
  , 'skittles'
]

var addElementToBeginningOfArray = (xs, x) => {
  xs.unshift(x)
  return xs
}

var destructivelyAddElementToBeginningOfArray = (xs, x) => {
  xs.unshift(x)
  return xs
}

var addElementToEndOfArray = (xs, x) => {
  xs.push(x)
  return xs
}

var destructivelyAddElementToEndOfArray = (xs, x) => {
  xs.push(x)
  return xs
}

var accessElementInArray = (xs, x) => xs[x]

var removeElementFromBeginningOfArray = xs => {
  xs.shift()
  return xs
}

var removeElementFromEndOfArray = xs => {
  xs.pop()
  return xs
}
