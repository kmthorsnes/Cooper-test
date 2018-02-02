describe("Athlete", function() {
      var athlete;

        beforeEach(function() {
          athlete = new Athlete({
            age: 32,
            gender: 'Male',
            distance: 4000
        });
      });

      it('Should return an age of 32', function() {
        expect(athlete.age).toEqual(32);
      });

      it('Should return male as gender', function() {
        expect(athlete.gender).toEqual('Male');
      });

      it('Should return 4000 as distance', function() {
          expect(athlete.distance).toEqual(4000);
      });
  });
