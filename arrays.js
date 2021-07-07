var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(Mars_Bar, Hersheys) {
  return [Hersheys, ...Mars_Bar];
}

function destructivelyAddElementToBeginningOfArray(BonBons, Butterfinger) {
  BonBons.unshift(Butterfinger);
  return BonBons
}

function addElementToEndOfArray(Kisses, Ghirardelli) {
  return [...Kisses, Ghirardelli];
}

function destructivelyAddElementToEndOfArray(Cadbury, Crunch) {
  Cadbury.push(Crunch);
  return Cadbury
}

function accessElementInArray(Dove, Galaxy) {
  return Dove[Galaxy];
}

function destructivelyRemoveElementFromBeginningOfArray(Milky_Way) { Milky_Way.shift()
return Milky_Way
}

function removeElementFromBeginningOfArray(Mr_Goodbar) {
  return Mr_Goodbar.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(Rolos) {
  Rolos.pop()
  return Rolos
}

function removeElementFromEndOfArray(Starbar) {
 return Starbar.slice(0, Starbar.length -1)
}
