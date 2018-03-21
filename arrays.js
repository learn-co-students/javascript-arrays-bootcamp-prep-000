var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',

];


 var sisters = ["gabby","Drew","Julie","Dannielle","lauren"];
 var myself = "Zach";

function addElementToBeginningOfArray(sisters,myself){
  const family=  [`${myself}`,...sisters];
  return family;
}

var dogs = ["Rudy", "Jack"];
var cats = "Tootsie";

function destructivelyAddElementToBeginningOfArray(dogs,cats){
  dogs.unshift(`${cats}`);
  return dogs;
}

function addElementToEndOfArray(sisters,myself){
  const family=  [...sisters,`${myself}`];
  return family;
}
  
  var games = ["poker","tetris"];
  var sport = "golf";
  
  function destructivelyAddElementToEndOfArray(games,sport){
    games.push(`${sport}`)
    return games;
    }
    
    var days = ["Monday","Tuesday","Wednesday","Thursday"];
    var index = 3
    
    function accessElementInArray(days,index){
      var dayOfWeek = (days[`${index}`])
      return dayOfWeek
    }
    
  const foo = [1,2,3,4,5,6]
    
    function destructivelyRemoveElementFromBeginningOfArray(foo){
      foo.shift();
      return foo;
    }
    
    var parts = ["Prop","Wheels","wings"]
    
    function removeElementFromBeginningOfArray(parts){
      parts = parts.slice(1)
      return parts
    }
    
    var shoes =["Running","dress","Basketball"]
    
   function destructivelyRemoveElementFromEndOfArray(shoes){
     shoes.pop();
     return shoes
   }
    var parks = ["Ann","Julie","Albert"]

    function removeElementFromEndOfArray(parks){
     lessParks = parks.slice(0, parks.length - 1)
      return lessParks
    }
    