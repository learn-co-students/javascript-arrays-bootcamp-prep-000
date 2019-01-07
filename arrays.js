var chocolateBars = ['snickers','hundred grand','kitkat','skittles']
function addElementToBeginningOfArray(breakfast,pancakes){
  var ans = [pancakes,...breakfast]
  return ans
}
function destructivelyAddElementToBeginningOfArray(breakfast,waffle){
 breakfast.unshift(waffle)
 return breakfast
}///
function addElementToEndOfArray(lunch,hotdog){
  var ans = [...lunch,hotdog]
  return ans
}
function destructivelyAddElementToEndOfArray(lunch,hamburger){
   lunch.push(hamburger)
   return lunch
}//////
function accessElementInArray(dinner,steak){
  return dinner[steak]
}
function destructivelyRemoveElementFromBeginningOfArray(pie){
   pie.shift()
   return pie
}

  function removeElementFromBeginningOfArray(iceCream){
    var cats = iceCream.slice(1)
   return cats
  }
 function destructivelyRemoveElementFromEndOfArray(beer){
  beer.pop()
  return beer
 }
  function removeElementFromEndOfArray(cake){
    var dogs = cake.slice(0,cake.length - 1)
    return dogs
  }
   
   
  
   
   
   
   
