var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
var element;
var sodas = ["coke","pepsi","crush","sprite","gingerale"]
var element2;

function addElementToBeginningOfArray(chocolateBars,element){
      return [element, ...chocolateBars]
                                    }
chocolateBars=[element,...chocolateBars]

function destructivelyAddElementToBeginningOfArray(chocolateBars,element){chocolateBars.unshift(element);
            return chocolateBars;}
             
  function addElementToEndOfArray(sodas,element2){
            return [...sodas,element2]}
  function destructivelyAddElementToEndOfArray(sodas,element2){sodas.push(element2)
            return sodas;}
                              
var entrepreneurs = ["Elizabeth Holmes","Laurene Powell Jobs","Arianna Huffington"]

var index=5;

function accessElementInArray(entrepreneurs, index){
  return entrepreneurs[index];
}

var trapSongs= ["ItsAVibe","MotorSport","StirFry"]

function destructivelyRemoveElementFromBeginningOfArray(trapSongs){
  trapSongs.shift()  
  return trapSongs;
}

function removeElementFromBeginningOfArray(trapSongs){
  trapSongs=trapSongs.slice(1)
  return trapSongs;
}

var iceCreams = ["chocolate","vanilla","rasperry"]

function destructivelyRemoveElementFromEndOfArray(iceCreams){
  iceCreams.pop()
 return iceCreams;
}

var shops= ["starbucks","target","walmart"]

function removeElementFromEndOfArray(shops){
  shops=shops.slice(0,shops.length-1) 
  return shops;
}

