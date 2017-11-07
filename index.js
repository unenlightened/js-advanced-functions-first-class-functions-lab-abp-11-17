// Code your solution in this file!

const returnFirstTwoDrivers = function (array){
  const newArray = array.slice(0, 2);
  return newArray;
};

const returnLastTwoDrivers = function (array){
  const newArray = array.slice(array.length-2, array.length);
  return newArray;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
  
  return (function(){ 5 * multiplier;});
}

//const fareMultiplier = createFareMultiplier(2);

//const fareQuintupler = createFareMultiplier(5);

//expect(fareQuintupler(5)).to.eql(25);
