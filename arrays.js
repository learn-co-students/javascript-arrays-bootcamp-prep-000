var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (,) {
  var cars = ["Honda", "Nissan", "Toyota"];
  ["Volkswagon", ...cars];
  return cars
}


function destructiveAddElementToBeginningOfArray (,) {
  var stores = ["Wal-Mart", "Target", "Home Depot"];
  stores.unshift("Toys R' Us");
  return stores
}

function addElementToEndOfArray (,) {
  var shoes = ["Nikes", "Puma", "Adidas"];
  [...shoes, "Vans"];
}

function destructivelyAddElementToEndOfArray (,) {
  var actors = ["Will Smith", "Martin Lawrence", "Chris Rock"];
  actors.push("Tyler Perry");
}

function accessElementInArray () {
  var snacks = ["Pringles", "Twix", "Pop Tarts"];
  console.log(snacks[0]);
}

function destructivelyRemoveElementFromBeginningOfArray (videogames) {
  var videogames = ["Crash Bandicoot", "Spyro", "Sonic"];
  videogames.shift();
  return videogames
}

function removeElementFromBeginningOfArray (schools) {
  var schools = ["UF", "FSU", "UCF"];
  schools.slice(1);
  return schools
}

function destructivelyRemoveElementFromEndOfArray (rappers) {
  var rappers = ["Lil Wayne", "Busta", "Chance"];
  rappers.pop();
  return rappers
}

done() 
