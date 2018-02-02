function Person(attr) {
  this.age = attr.age;
  this.gender = attr.gender;
  this.distance = attr.distance;
}

function result(person) {
  if (person.gender === 'Male') {
    return 'Male';
  }
}

function excellent(person) {
  if (person.gender === 'Male' &&
    person.age >= 30 && person.age <= 39 &&
    person.distance > 3000
  ) {
    return 'Excellent';
  }
}

function aboveaverage(person) {
  if (person.gender === 'Male' &&
    person.age >= 30 && person.age <= 39 &&
    person.distance >= 2300 && person.distance <= 2699
  )
  {
    return 'Above average';
  }
}
