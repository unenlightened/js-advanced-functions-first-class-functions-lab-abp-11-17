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

  const fareMultiplier = function(fare){fare*multiplier;}
  return fareMultiplier;
}

const fareQuintupler = createFareMultiplier(5);

/*describe('createFareMultiplier()', function () {
  it('returns a function', function () {
    const fareMultiplier = createFareMultiplier(2);

    expect(fareMultiplier).to.be.a('function');
  });

  it('should multiply a given value using the created multiplier', function () {
    const fareQuintupler = createFareMultiplier(5);

    expect(fareQuintupler(5)).to.eql(25);
  });
});

describe('fareDoubler()', function () {
  it('is a function', function () {
    expect(fareDoubler).to.be.a('function');
  });

  it('doubles fares', function () {
    expect(fareDoubler(10)).to.eql(20);
  });
});

describe('fareTripler()', function () {
  it('is a function', function () {
    expect(fareTripler).to.be.a('function');
  });

  it('triples fares', function() {
    expect(fareTripler(12)).to.eql(36);
  });
}); */
