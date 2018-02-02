describe("Athlete", function() {
  var athlete;

  beforeEach(function() {
    athlete = new Athlete({age: 32, gender: 'Male', distance: 4000});
  });

  it('Should return an age of 32', function(){
    expect(athlete.age).toEqual(32);
  });


});
