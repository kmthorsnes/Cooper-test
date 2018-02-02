describe("Person", function() {
      var person;

        beforeEach(function() {
          person = new Person({
            age: 32,
            gender: 'Male',
            distance: 4000
        });
      });

      it('Should return an age of 32', function() {
        expect(person.age).toEqual(32);
      });

      it('Should return male as gender', function() {
        expect(person.gender).toEqual('Male');
      });

      it('Should return 4000 as distance', function() {
          expect(person.distance).toEqual(4000);
      });

      it('should return string "male"', function() {
          expect(result(person)).toEqual('Male');
      });

      it('Should return "excellent" as male 32, 4000 meters run', function() {
          expect(excellent(person)).toEqual('Excellent');
      });

  });
