var chocolateBars = [
  'snickers',
  'hundred grand',
  'kit kat',
  'skittles'
]

function addElementToBeginningOfArray(
  myArray = [], a
) {
  myArray = [a, ...myArray]
  return myArray
}

function destructivelyAddElementToBeginningOfArray(
  myArray = [], a
) {
  myArray.unshift(a)
  return myArray
}

function addElementToEndOfArray(
  myArray = [], a
) {
  myArray = [...myArray, a]
  return myArray
}

function destructivelyAddElementToEndOfArray(
  myArray = [], a
) {
  myArray.push(a)
  return myArray
}

function accessElementInArray(
  myArray = [
    1,
    2,
    3
  ] , a) {
    return myArray[2]
  }

  function destructivelyRemoveElementFromBeginningOfArray(
    myArray = [
      1,
      2,
      3
    ]){
      myArray.shift()
      return myArray
    }

function removeElementFromBeginningOfArray(
  myArray = [
    1,
    2,
    3
  ]) {
    myArray = myArray.slice(1)
    return myArray
  }

  function destructivelyRemoveElementFromEndOfArray(
    myArray = [
      1,
      2,
      3
    ]) {
      myArray.pop()
      return myArray
    }

  function removeElementFromEndOfArray(
    myArray = [1, 2, 3]
  ) {
    myArray = myArray.slice(0, myArray.length - 1)
    return myArray
  } 
