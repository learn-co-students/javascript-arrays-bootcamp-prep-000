var chocolateBars = [snickers, hundred grand, kitkat, skittles]


var addElementToBeginningOfArray = [1, 2]
["Element", ...addElementToBeginningOfArray]


var destructivelyAddElementToBeginningOfArray = [1, 2]
destructivelyAddElementToBeginningOfArray = ["Element", ...destructivelyAddElementToBeginningOfArray]


//this also achieves what the above code accomplishes but doesn't print the array
var destructivelyAddElementToBeginningOfArray = [1, 2]
destructivelyAddElementToBeginningOfArray.unshift("Element")


var addElementToEndOfArray = [1, 2]
[...addElementToEndOfArray, "Element"]


var destructivelyAddElementToEndOfArray = [1, 2]
destructivelyAddElementToEndOfArray = [...destructivelyAddElementToEndOfArray, "Element"]


var accessElementInArray = [1, 2 ,3]
console.log(accessElementInArray[1]);


const destructivelyRemoveElementFromBeginningOfArray = [1, 2 ,3]
destructivelyRemoveElementFromBeginningOfArray = destructivelyRemoveElementFromBeginningOfArray.shift()


var removeElementFromBeginningOfArray = [1, 2, 3]
removeElementFromBeginningOfArray.slice(1)


var destructivelyRemoveElementFromEndOfArray = [1, 2, 3]
destructivelyRemoveElementFromEndOfArray.pop()
destructivelyRemoveElementFromEndOfArray


var removeElementFromEndOfArray = [1, 2, 3]
removeElementFromEndOfArray.slice(0, removeElementFromEndOfArray.length -1)
