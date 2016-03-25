# JavaScript Arrays

## Objectives
+ Explain what an array is and why we use it
+ Create an array
+ Add an element to an array
+ Access an element in an array
+ Replace an element in an array
+ Delete an element from an array
+ Iterate over an array


## Instructions

You'll be coding along in `array.js`. There are tests to run to make sure you're on the right track.

## Creation

JavaScript arrays can contain any types of values and they can be of mixed types, just like in Ruby. You can create arrays in two different ways, the most common of which is to list values in a pair of square brackets. These are called array literals.

Syntax:

```javascript
var arrayName = [element0, element1, ..., elementN];
```

Examples:

```javascript
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

var tvShows = ["game of thrones", "true detective", "the good wife", "empire"];

var weirdGreeting = [ "he", 110, "w", 0, "r", {"1":"d"} ];

var empty = [];
```

The Array constructor is another approach to making a new JavaScript array.

```javascript
var evenNumbers = new Array();
```

+ Define a function called `createArray`. The function does not need to accept an argument, but should return an array of the strings `snickers`, `hundred grand`, `kitkat`, and `skittles`.

## Adding an Element

Ruby has two ways to add elements to the end of the array, `push` and `<<`. You're probably more familiar with the latter which is also known as the shovel method. JavaScript doesn't have the shovel method, but like Ruby, it does feature a push method. Take a look at the code below:

```javascript
var superheroines = ["catwoman", "she-hulk", "mystique"];

superheroines.push("wonder woman");
// superheroines is now ["catwoman", "she-hulk", "mystique", "wonder woman"]
```

To add elements to an array at specific indexes, you use the bracket equals notation. This notation will also work for replacing values.

Let's add three elements to our empty `evenNumbers` array. First, decide what index you want your element to have (remember the first element in an array has an index of 0). Then you wrap this desired index in brackets, place the array's variable name directly to the left. Remember to place an equal sign to the right of the closing square bracket, and put the value that you want your element to have after the equal sign.

```javascript
var evenNumbers = new Array();

evenNumbers[0] = 2;
evenNumbers[1] = 4;
evenNumbers[3] = 8;

// evenNumbers is now [ 2, 4, undefined, 8 ]
```

Notice that since we didn't tell JavaScript what value we wanted the third element to have, it defaulted to `undefined`.


+ Define a function `addElementToArray`, that accepts an array as a parameter. The function should  add `"A Christmas Story"` to the end of the array. The function should return the entire array.

## Accessing an Element

You can get elements out of arrays if you know their index. Just like in Ruby, array elements' indexes start at 0 and increment by 1, so the first element's index is 0, the second element's index is 1, the third element's is 2, etc.

```javascript
var entrepreneurs = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna Huffington"];

// the line below will print the string "Elizabeth Holmes"
console.log(entrepreneurs[0]);

// the code below will print the string "Arianna Huffington is the co-founder and editress-in-chief of The Huffington Post"
var bio = " is the co-founder and editress-in-chief of The Huffington Post";
console.log(entrepreneurs[2] + bio);

// the line below will return undefined
entrepreneurs[9];
```

+ Define a function `accessElementFromArray`. The function should accept an array of states as an argument and return the third item in the array.

## Replacing an Element

Replacing the value of an element in a JavaScript array is very similar to the equivalent in Ruby. Say you have an array of author names, and you would like to replace the second element, J. D. Salinger, with the string "Harper Lee". Since the second element has an index of 1, you simply reassign using the index number:

```javascript
var authors = ["ray bradbury", "j. d. salinger", "maya angelou"];

authors[1] = "harper lee";
// authors is now ["ray bradbury", "harper lee", "maya angelou"];
```

+ Define a function `replaceElementInArray` which should accept an array of names as an argument. The function should replace the second item in the array with `"Carter"`. The function should return the replaced item from the array.

## Removing an Element

To remove an element in JavaScript, you can call on the `splice()` function. This function takes two required arguments and some optional arguments:

1. index to start at (required)
2. number of elements to remove (required)
3. an element to add to the array (optional)
4. an element to add to the array (optional)
5. etc.

```javascript
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'surgeon'];

// removes 1 element from index 3
var firstRemovedFish = myFish.splice(3, 1);

// myFish is now ['angel', 'clown', 'drum', 'surgeon']
// firstRemovedFish is ['mandarin']

// removes 1 element from index 2, and inserts 'trumpet'
var secondRemovedFish = myFish.splice(2, 1, 'trumpet');
// myFish is ['angel', 'clown', 'trumpet', 'surgeon']
// secondRemovedFish is ['drum']

// removes 2 elements from index 0, and inserts 'parrot', 'anemone' and 'blue'
var removedFishes = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon']
// removedFishes is ['angel', 'clown']
```

+ Define a function `removeElementFromArray` that take an array of dishes as a parameter. The function should remove the third and fourth item from the array, and adds "Roast Chicken" to the end, using the `splice` function. The function should return the updated array.

## Iteration

JavaScript's `forEach` function will help you to iterate through an array. The forEach method executes a provided function once per array element. The first argument that this provided function needs is the variable name for currentValue. In Ruby, this value is typically seen inside of the double pipes (ex. `letters.each do |letter|`).

```javascript
var letters = ["z", "y", "x", "w", "v", "u", "t", "s"];

letters.forEach(function(letter) {
  console.log("♫ " + letter + " ♬");
});
// this will print the following to the console:
// ♫ z ♬
// ♫ y ♬
// ♫ x ♬
// ♫ w ♬
// ♫ v ♬
// ♫ u ♬
// ♫ t ♬
// ♫ s ♬
```

Like Ruby's `.each_with_index` method, you can also instruct JavaScript to keep track of the index number of the element it is currently on. To do this, pass the provided function a second argument:

```javascript
var letters = ["z", "y", "x", "w", "v", "u", "t", "s"];

letters.forEach(function(letter, index) {
  var number = index + 1;
  console.log(number + ". " + letter);
});
// this will print the following to the console:
// 1. z
// 2. y
// 3. x
// 4. w
// 5. v
// 6. u
// 7. t
// 8. s
```

+ Write a function `iterateArray` that accepts an array of numbers as a parameter. The body should also contain an empty array, stored in the variable `newNums`. You should iterate over the array of numbers, add 5 to each number, and store the larger number in the array `newNums`. The function should return the `newNums` array.

## Array Wackiness

It's important to remember that arrays in JavaScript are kind of wonky. You can
assign properties to them:

```js
var array = [1, 2, 3];

array.myProperty = "I'm a property!";

```

Which can lead to weird behavior:

```js
array;
// [1, 2, 3];

// Where did our property go?
array.myProperty;
// "I'm a property!";

array.length;
// 3 - Would you have expected 3 or 4?
```

We don't tend to do these kinds of things on purpose, but it's important to be
aware that they can happen so that you have a good sense of where to look
if/when strange bugs start to appear.

## Resources

* [MDN - Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Codecademy - Arrays](http://www.codecademy.com/glossary/javascript)

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/intro-to-arrays.js' title='JavaScript Arrays'>JavaScript Arrays</a> on Learn.co and start learning to code for free.</p>

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/intro-to-arrays.js'>Intro To Arrays in JS</a> on Learn.co and start learning to code for free.</p>
