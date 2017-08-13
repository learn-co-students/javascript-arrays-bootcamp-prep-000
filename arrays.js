var grilledCheeseIngredients =[
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]
console.log(grilledCheeseIngredients);

var tomatoSauceIngredients=[
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

console.log(tomatoSauceIngredients[0]);

var chocolateBars=[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
console.log(chocolateBars);

var superheroines =['catwoman','she-hulk','mystique']
superheroines.push('wonder woman')
console.log(superheroines);

var cities=['New York','San Francisco']
console.log(cities);
//cities.unshift('Philadelphia')
cities =['Philadelphia','Dallas',...cities]
console.log(cities);
cities=[...cities,'Denver']
console.log("cities",cities);
morecities=['Salt Lake City','Seattle','Boston',...cities,'Washington']
console.log("more cities",morecities);

function addElementToBeginningOfArray(arraytomodify,citytoadd){
return arraytomodify=[citytoadd,...arraytomodify]
}


console.log('when i call function result is',addElementToBeginningOfArray(cities,'Atlanta'));
console.log('the cities array after function',cities,'so original array did not change');

function destructivelyAddElementToBeginningOfArray(arraytomodify,citytoadd){
 return arraytomodify =[citytoadd,...arraytomodify]
}

cities=destructivelyAddElementToBeginningOfArray(cities,'Portland');
console.log('when i call destructibe function result is',destructivelyAddElementToBeginningOfArray(cities,'New Mexico'));
console.log('the cities array after destructibe function',cities,'so original array did not change');

ingredients =['oil','cheese','butter','garlic','pepper']

function addElementToEndOfArray(arraytomodify,ingredienttoadd){
   return [...arraytomodify,ingredienttoadd]
}

function destructivelyAddElementToEndOfArray(arraytomodify,ingredienttoadd){
  return [...arraytomodify,ingredienttoadd]
}


newingredients=addElementToEndOfArray(ingredients,"Onion");
console.log('new array of ingredients:',newingredients);
console.log('original array of ingredients:',ingredients);

ingredients=destructivelyAddElementToEndOfArray(ingredients,"Tomato");
console.log('original array of ingredients after destructive function',ingredients);

function destructivelyRemoveElementFromBeginningOfArray(){

  return ingredients.slice(3);
}

ingredientshifted=destructivelyRemoveElementFromBeginningOfArray(ingredients);
console.log(ingredientshifted);
console.log('o',ingredients);

array1=[1,2,3]
array1.myProperty="property"

console.log('array1:',array1);
console.log('array lenghth',array1.length);
