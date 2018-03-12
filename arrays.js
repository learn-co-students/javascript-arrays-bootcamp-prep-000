var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  
  function addElementToBeginningOfArray(chocolateBars, string) {
    string = "foo"
    return [string,...chocolateBars]
  }
  
  function destructivelyAddElementToBeginningOfArray(chocolateBars, string) {
    chocolateBars.unshift(string)
    return chocolateBars
  }
  
  function addElementToEndOfArray(chocolateBars,string) {
    return [...chocolateBars,string]
  }
  
  function destructivelyAddElementToEndOfArray(chocolateBars, string) {
    chocolateBars.push(string)
    return chocolateBars
  }