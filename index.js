// Code your solution in this file!

const returnFirstTwoDrivers = function (array){
  for (const data in array){
    if (data < 2){
      return console.log(array);
    }
  }
};
