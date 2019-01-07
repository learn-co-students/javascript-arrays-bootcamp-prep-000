var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray() {
  var cars = ['Toyota','Dodge','Mercedes'];
  return ['Porsche',...cars];
}

function destructivelyAddElementToBeginningOfArray() {
  var colors = ['Green','Blue','Red'];
  return colors.unshift('Purple');
}

function addElementToEndOfArray() {
  var shapes = ['Square','Circle','Triangle'];
  return [...shapes,'Rectangle'];
}

function destructivelyAddElementToEndOfArray() {
  var pets = ['Cat','Dog','Snake'];
   return pets.push('Rabbit');
}

function accessElementInArray() {
  var planets = ['Mars','Pluto','Earth'];
  return planets[1];
}

function destrucivelyRemoveElementFromBeginningOfArray() {
  var names = ['James','Kevin','Sandra'];
  return names.shift();
}

function removeElementFromBeginningOfArray() {
  var numbers = ['one','two','three'];
  return numbers.slice(1);
}

function destructivelyRemoveElementFromEndOfArray() {
  var states = ['Texas','North Dakota','Colorado'];
  return states.pop();
}

function removeElementFromEndOfArray() {
  var fruits = ['Apple','Banana','Mango'];
  return fruits.slice(0,fruits.lenght-1);
}

