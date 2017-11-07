// Code your solution in this file!

const returnFirstTwoDrivers = function (array){
  const newArray = array.slice(0, 2);
  return newArray;
};

const returnLastTwoDrivers = function (array){
  const newArray = array.slice(array.length-2, array.length);
  return newArray;
};

function selectingDrivers(fn1, fn2){
  fn1();

}
/* describe('selectingDrivers', function () {
  it('has the `returnFirstTwoDrivers` function to as its first element', function () {
    expect(selectingDrivers[0]).to.eql(returnFirstTwoDrivers);
  });

  it('has the `returnLastTwoDrivers` function to as its last element', function () {
    expect(selectingDrivers[1]).to.eql(returnLastTwoDrivers);
  });

  it('allows us to invoke either function from the array', function () {
    expect(selectingDrivers[0](drivers)).to.eql(['Sally', 'Bob']);

    expect(selectingDrivers[1](drivers)).to.eql(['Freddy', 'Claudia']);
  });
});
*/
