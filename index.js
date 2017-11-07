// Code your solution in this file!

const returnFirstTwoDrivers = function (collection){
  for (const key in collection){
    if (key > 2){
      return console.log(collection);
    }
  }
};
