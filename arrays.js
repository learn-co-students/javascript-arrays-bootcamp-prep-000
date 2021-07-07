var chocolateBars = [
  'snickers'
  'hundred grand'
  'kitkat'
  'skittles'
]

function addElementToBeginningOfArray (a, b){
  var bar = '3 Musketeers'
  return [bar, ...chocolateBars]

}

function destructivelyAddElementToBeginningOfArray (a, b){
  var bar = 'Hersey'
  return chocolateBars[bar]

}

function addElementToEndOfArray (a){
  var bar = 'Milky Way'
  return [...chocolateBars, bar]
}

function destructivelyAddElementToEndOfArray (a, b){
  var bar = 'Take 5'
  return chocolateBars[bar]
}

function accessElementInArray (a, b){
  var array = chocolateBars
  var index = 0
  return chocolateBars[array]
}

function destructivelyRemoveElementFromBeginningOfArray (a) {
  return chocolateBars.shift()
}

function removeElementFromBeginningOfArray (a) {
  return chocolateBars.slice(0)
}

function destructivelyRemoveElementFromEndOfArray (a){
  return chocolateBars.push()
}

function removeElementFromEndOfArray(a){
  return chocolateBars.slice(0, chocolateBars.lenght(-1))
}
