var
chocolateBars= [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
]
function addELementToBeginningofArray(puppy,kitten) {
var babyAnimals=[
  'puppy','kitten,']
babyAnimals.unshift('duckling')
return babyAnimals;
}

function destructivelyAddElementToBeginningofArray(iceCream,cookie) {
var desserts=[
  'iceCream','cookie'
]
desserts.unshift('cake')
return desserts;
}
function addElementToEndofArray (Botswana, SouthAfrica) {
  var africanCountries= [
    'Botswana','SouthAfrica'
  ]
  africanCountries.push('Chad')
  return africanCountries;
}

function descrutivelyAddElementToEndOfArray (Indian,Pacific) {
  var oceans= [
    'Indian', 'Pacific'
  ]
  oceans.push ('Arctic')
  return oceans;
}
function accessElementinArray () {
  var europeanCountries=[
    'theNetherlands', 'France'
  ]
  return europeanCountries;
}
function destructivelyRemoveElementFromBeginningOfArray () {
  var dogBreeds=[
    'poodle', 'maltese'
  ]
  dogBreeds.shift()
  return dogBreeds;
}
function destructivelyRemoveElementFromEndofArray () {
  var designerBrands=[
    'Givenchy','Balmain','Dior'
  ]
  designerBrands.pop ()
  return designerBrands;
}
function removeElementFromEndofArray () {
  var fruits =[
    'apple','pear','grape'
  ]
  fruit.splice (0,fruit.length-1)
  return fruit
}
