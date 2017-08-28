var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function destructivelyAddElementToBeginningOfArray(){
  var array = [1]
  array = ['foo', ...array]
  return array
}

function addElementToBeginningOfArray(){
  const destructive = [1]
  const newDestructive = ['foo', ...destructive]
  return newDestructive
}

function destructivelyAddElementToEndOfArray(){
  var array = [1]
  array[1] = 'foo'
  return array
}

function addElementToEndOfArray(){
  const destructive = [1]
  const newDestructive = [...destructive, 'foo']
  return newDestructive
}

function accessElementInArray(){
  var array = [1, 3, 2]
  return array[1]
}

function destructivelyRemoveElementFromBeginningOfArray(){
  var timmy = [1, 2, 3]
  timmy.shift()
  return timmy
}

function removeElementFromBeginningOfArray(){
  var jimmy = [1, 2, 3]
  slimmy = jimmy.slice(1)
  return slimmy
}

function destructivelyRemoveElementFromEndOfArray(){
  const ayla = [1, 2, 3]
  ayla.pop()
  return ayla
}

function removeElementFromEndOfArray(){
  var adam = [1, 2, 3]
  adam.slice(0, adam.length - 1)
  return adam
}
