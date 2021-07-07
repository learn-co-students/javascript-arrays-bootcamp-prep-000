var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
var addElementToBeginningOfArray;
var addElementToEndOfArray;
var accessElementInArray;
var destructivelyAddElementToBeginningOfArray;
var destructivelyAddElementToEndOfArray;
var destructivelyRemoveElementFromBeginningOfArray;
var destructivelyRemoveElementFromEndOfArray;
var removeElementFromBeginningOfArray;
var removeElementFromEndOfArray;

addElementToBeginningOfArray = [
  [...chocolateBars, "skittles"]
]

 destructivelyAddElementToBeginningOfArray = [
 chocolateBars.unshift("kitkat");
  ]

addElementToEndOfArray = [
    [chocolateBars..., "hundred grand"]
 ]

 destructivelyAddElementToEndOfArray = [
   chocolateBars.push("snickers");
  ]

 accessElementInArray = [
  console.log(chocolateBars[2])
    ]
destructivelyRemoveElementFromBeginningOfArray = [
 chocolateBars.shift("hundred grand");
]

 removeElementFromBeginningOfArray = [
 chocolateBars.slice(-2)
    ]
 destructivelyRemoveElementFromEndOfArray = [
 chocolateBars.pop()
 chocolateBars
 ]
removeElementFromEndOfArray = [
chocolateBars.splice(1)
]
