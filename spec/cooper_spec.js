/*jshint esversion: 6 */
describe("Person", function() {
    let person;

    beforeEach(function() {
      woman = new Person(17, 'female');
      man = new Person(32, 'male');
    });

    it('Should return an age of 32', function() {
      expect(man.age).toEqual(32);
    });

    it('Should return male as gender', function() {
      expect(man.gender).toEqual('male');
    });

    it('2400m should return "Excellent" for 17y female', function() {
      result(woman, 2400);
      expect(assessment).toEqual('Excellent');
    });

    it('2000m should return "Average" for 32y male', function() {
      result(man, 2000);
      expect(assessment).toEqual('Average');
    });
});
