//The .splice() Method





// .splice(a) with one argument
// At index a,remove all items after and including index a
var items = [2,4,6,8,10,12,14,16]

items.splice(4) // [10,12,14,16]
//removes everything after and including index 4 from the items array 
//and returns the items that have been removed [10,12,14,16]

console.log(items) // [2,4,6,8]









// .splice(a,b) with two arguments
// At index a, remove b items

var items = [1,3,5,7,9,11,13,15,17,19]

items.splice(4,3) 
// At index 4, remove 3 items
// removes [9,11,13] from the items array and returns these elements

console.log(items) // [ 1, 3, 5, 7, 15, 17, 19 ]










// .splice(a,b,...) with three arguments
// At index a, remove b number of items,
// Then list the number of items to add to the array at the specified index a

var items = [1,2,3,4,5,6,7,8,9,10]

items.splice(4,2,7,7,7)
// At index 4, remove two items
// Then add [7,7,7] at that location in the array

console.log(items) // [ 1, 2, 3, 4, 7, 7, 7, 7, 8, 9, 10 ]













