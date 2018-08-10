var videoGames = ['GTA 5', 'Sim City', 'Mass Effect'];
var faveGames = ['bes'];

function addElementToBeginningOfArray(faveGames,videoGames) {
  return [faveGames,...videoGames];
}

function destructivelyAddToBeginningOfArray(faveGames,videoGames) {
  videoGames.unshift(faveGames);
  return videoGames;
}
function addElementToEndOfArray(faveGames,videoGames) {
  return [...videoGames,faveGames];
}
function destructivelyAddToEndOfArray(faveGames,videoGames) {
  videoGames.push(faveGames);
  return videoGames;
}
function