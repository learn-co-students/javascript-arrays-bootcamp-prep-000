var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];
var list = ['cars','boats','planes'];
var pets = ['cats','dogs','birds'];


function addElementToBeginningOfArray(list,foo) {
  return ['foo', ...list];
}

function destructivelyAddElementToBeginningOfArray(pets,foo) {
  pets.unshift('foo');
  return pets;
}

var names = ['Dan','Amber','Jelly'];
var jobs = ['baker','clerk','janitor'];

function addElementToEndOfArray(names,foo) {
  return [...names,'foo'];
}

function destructivelyAddElementToEndOfArray(jobs,foo) {
   jobs.push('foo');
   return jobs;
}

var sounds = ['vroom','skrrt'];

function accessElementInArray(sounds,i) {
  return sounds[i];
}

var people = ['Stan','Cliff','Hank'];

function destructivelyRemoveElementFromBeginningOfArray(people) {
   people.shift();
   return people;
}

function removeElementFromBeginningOfArray(people) {
  return people.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
   chocolateBars.pop();
   return chocolateBars;
}

function removeElementFromEndOfArray(people) {
  return people.slice(0,people.length - 1);
}