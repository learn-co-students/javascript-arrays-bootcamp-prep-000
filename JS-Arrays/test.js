var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var primeNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]

var tvShows = ["the game of thrones", "true detective", "the good wife", "empire"]
var weirdGreeting = ["he", 110, "w", 0, "r", 1, "d"]

var superHeroines = ["cat-woman", "she-hulk", "mystique"]

var empty = []

var evenNumbers = new Array()

var entrepreneurs = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna HUffington"]

// the line below will print the string "Elizabeth Holmes"

console.log(entrepreneurs[0])

// the code below will print the string "Arianna Huffington is the co-founder and editor-in-chief of the Huffington Post"

var bio = " is the co-founder and editor-in-chief of the Huffington Post"

console.log(entrepreneurs[2] + bio)

// the line below will return undefined
console.log(entrepreneurs[9])

const days = ["Monday", "Tuesday", "Wednesday"]

days.shift() // returns the removed element, in this case "Monday"

days // ["Tuesday", "Wednesday"]

var cats = ["Milo", "Garfield", "Otis"]

cats = cats.slice(1)

console.log(cats)

var cats = ["Milo", "Garfield", "Otis"]

// Returns the last 2 cats 

cats.slice(-2)  // ["Garfield", "Otis"]

// Returns the last cats 

cats.slice(-1)  // ["Otis"]

let items = [1, 2, 3, 4]

// this will remove everything after index 1 (inclusive)
// it returns the removed items: [2, 3, 4]

items.splice(1)

items // [1]

items = [1, 2, 3, 4]

// "at index 1, remove 1 item"
// it returns the removed item(s): [2]

items.splice(1, 1)

<<<<<<< HEAD
console.log(items) // [1, 3, 4]

items = [1, 2, 3, 4]

// "at index 1, remove 1 item and add 6 and add 7"
// it returns the removed items: [2]

items.splice(1, 1, 6, 7)

console.log(items)

items = [1, 2, 3, 4, 5, 6, 7]

items.splice(3, 1)

console.log(items) // [1, 2, 3, 5, 6, 7]
=======
console.log(items) // 


>>>>>>> 1d6c69d213c70af5bdb904a890eabbf7b325063f

items = [1, 2, 3, 4, 5]

items = [...items.slice(0, 2), ...items.slice(3)] // [1, 2, 4, 5]

console.log(items)

<<<<<<< HEAD
items = [1, 2, 3, 4, 5, 6, 7]

items = [... items.slice(0, 3), ...items.slice(6)] // [1, 2, 3, 7]

console.log(items)

console.log(Object.keys([1, 2, 3]))

var arr = ["under", "the", "hood"]

console.log(arr[0]) // "under"

console.log(arr['0']) // "under"

console.log(arr[02]) // 02 the number *is* 2, so we get "hood"

console.log(arr['02']) // '02' the string is *not* 2, so we get undefined

var myArray = [1, 2, 3]

myArray.length // 3

myArray.length = 1

myArray // [1] (!!!)

console.log(myArray)

var array = [1, 2, 3]

array.myProperty = "I'm a property!"

console.log(array.length)
=======
items = [1, 2, 3, 4, 5]

items = [...items.slice(0, 2), ...items.slice(3)] // [1, 2, 4, 5]

console.log(items)
>>>>>>> 1d6c69d213c70af5bdb904a890eabbf7b325063f
