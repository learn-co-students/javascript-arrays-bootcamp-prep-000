var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


var towns = ['New York', 'New Orleans']
var newTown = 'Austin'
var towns2

function addElementToBeginningOfArray(towns, newTown) {
  towns2 = [newTown, ...towns]
  return towns2
}

function destructivelyAddElementToBeginningOfArray(towns, newTown) {
  towns.unshift(newTown)
  return towns
}


var countries = ['United States', 'China', 'India']
var newCountry = 'Australia'
var countries2

function addElementToEndOfArray(countries, newCountry) {
  countries2 = [...countries, newCountry]
  return countries2
}

function destructivelyAddElementToEndOfArray(countries, newCountry) {
  countries.push(newCountry)
  return countries
}


var numbers = [1, 2, 3]

function accessElementInArray(numbers) {
  return numbers[2]
}


var months = ['December', 'January', 'February', 'March']

function destructivelyRemoveElementFromBeginningOfArray(months) {
  months.shift()
  return months
}


var years = ['2016', '2017', '2018']
var years2

function removeElementFromBeginningOfArray(years) {
  years2 = years.slice(1)
  return years2
}


var games = ['Cluedo', 'Uno', 'Rail', 'Requins']

function destructivelyRemoveElementFromEndOfArray(games) {
  games.pop()
  return games
}


var legumes = ['courgettes', 'tomates', 'aubergines', 'potirons']
var newLegumes

function removeElementFromEndOfArray(legumes) {
  newLegumes = legumes.slice(0, legumes.length - 1)
  return newLegumes
}
