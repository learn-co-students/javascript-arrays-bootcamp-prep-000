var chocolatebars = ["snickers","hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(tableau, toAdd){
  return [toAdd, ...tableau];
  }

  function destructivelyAddElementToBeginningOfArray (tableau, toAdd){

    tableau.unshift(toAdd);
    return tableau;
    }
function addElementToEndOfArray (tabeau, toAdd){
  return [...tableau, toAdd];

 }
function destructivelyAddElementToEndOfArray(tableau, toAdd){
tableau.push(toAdd);
return tableau;
}

function accessElementInArray(tableau, indice){
  return tableau[indice];

}
function destructivelyRemoveElementFromBeginningOfArray(tableau){
  tableau.shift();
  return tableau;
}

function removeElementFromBeginningOfArray(tableau){
tableau.slice(1);
return tableau ;

}
function destructivelyRemoveElementFromEndOfArray(tableau){
tableau.pop();
return tableau ;

}
function removeElementFromEndOfArray (tableau){
tableau.slice(0, tableau.length - 1)

  return tableau; /

}
