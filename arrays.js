var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

var destructivelyRemoveElementFromEndOfArray = [
  "Mercedes Benz",
  "BMW",
  "Porsche"
]
destructivelyRemoveElementFromEndOfArray.slice(0, destructivelyRemoveElementFromEndOfArray.length - 1)
destructivelyRemoveElementFromEndOfArray()

var removeElementFromBeginningOfArray = [
  "Toyota",
  "Nissan",
  "Mazda"
]
