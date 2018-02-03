/*jshint esversion: 6 */
describe("Person", function() {
    let person;

    beforeEach(function() {
      person = new Person(32, 'Male');
    });

    it('Should return an age of 32', function() {
      expect(person.age).toEqual(32);
    });

    it('Should return male as gender', function() {
      expect(person.gender).toEqual('Male');
    });

    it('should return Excellent', function() {

      expect(person.result(2000)).toEqual('Average');
    });
});
