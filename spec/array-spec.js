'use strict';

describe('#createArray', function(){
  it("should return an array of strings", function(){
      expect(createArray()).toEqual(["snickers", "hundred grand", "kitkat", "skittles"])
  });

});

describe('#addElementToArray', function(){
  it("should return an array of Christmas movies", function(){
      expect(addElementToArray()).toEqual(['Home Alone', 'Love Actually', 'Elf', 'A Christmas Story'])
  });

});

describe('#accessElementFromArray', function(){
  it("should returns the third item in the array", function(){
      expect(accessElementFromArray()).toEqual("Virginia")
  });

});

describe('#replaceElementInArray', function(){
  it("should replace the second item in array with 'Carter' and return that item", function(){
      expect(replaceElementInArray()).toEqual("Carter")
  });

});

describe('#removeElementFromArray', function(){
  it("should remove the third and fourth item from the array and add 'Roast Chicken'", function(){
      expect(removeElementFromArray()).toEqual(["Pasta Alfredo", "Grilled Salmon", "Roast Chicken"])
  });

});




