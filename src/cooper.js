//se etter coffeescript

function Person(attr) {
  this.age = attr.age;
  this.gender = attr.gender;
  this.distance = attr.distance;
}

function result(person) {
  if (person.gender === 'Male' &&
    person.age >= 13 && person.age <= 14 &&
    person.distance > 2700){
    return 'Excellent';
    }
  else if (person.gender === 'Male' &&
    person.age >= 15 && person.age <= 16 &&
    person.distance > 2800){
    return 'Excellent';
    }
  else if (person.gender === 'Male' &&
    person.age >= 17 && person.age <= 19 &&
    person.distance > 3000){
    return 'Excellent';
    }
  else if (person.gender === 'Male' &&
    person.age >= 20 && person.age <= 29 &&
    person.distance > 2800){
    return 'Excellent';
    }
  else if (person.gender === 'Male' &&
    person.age >= 30 && person.age <= 39 &&
    person.distance > 2700){
    return 'Excellent';
    }
  else if (person.gender === 'Male' &&
    person.age >= 40 && person.age <= 49 &&
    person.distance > 2500){
    return 'Excellent';
    }
  else if (person.gender === 'Male' &&
    person.age >= 50 &&
    person.distance > 2400){
    return 'Excellent';
    }
  else if (person.gender === 'Female' &&
    person.age >= 13 && person.age <= 14 &&
    person.distance > 2000){
    return 'Excellent';
    }
  else if (person.gender === 'Female' &&
    person.age >= 15 && person.age <= 16 &&
    person.distance > 2100){
    return 'Excellent';
    }
  else if (person.gender === 'Female' &&
    person.age >= 17 && person.age <= 19 &&
    person.distance > 2300){
    return 'Excellent';
    }
  else if (person.gender === 'Female' &&
    person.age >= 20 && person.age <= 29 &&
    person.distance > 2700){
    return 'Excellent';
    }
  else if (person.gender === 'Female' &&
    person.age >= 30 && person.age <= 39 &&
    person.distance > 2500){
    return 'Excellent';
    }
  else if (person.gender === 'Female' &&
    person.age >= 40 && person.age <= 49 &&
    person.distance > 2300){
    return 'Excellent';
    }
  else if (person.gender === 'Female' &&
    person.age >= 50 &&
    person.distance > 2200){
    return 'Excellent';
    }
  else if (person.gender === 'Male' &&
    person.age >= 13 && person.age <= 14 &&
    person.distance >= 2400 && person.distance <= 2699){
    return 'Above average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 15 && person.age <= 16 &&
    person.distance >= 2500 && person.distance <= 2799){
    return 'Above average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 17 && person.age <= 19 &&
    person.distance >= 2700 && person.distance <= 2999){
    return 'Above average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 20 && person.age <= 29 &&
    person.distance >= 2400 && person.distance <= 2799){
    return 'Above average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 30 && person.age <= 39 &&
    person.distance >= 2300 && person.distance <= 2699){
    return 'Above average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 40 && person.age <= 49 &&
    person.distance >= 2100 && person.distance <= 2499){
    return 'Above average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 50 &&
    person.distance >= 2000 && person.distance <= 2399){
    return 'Above average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 13 && person.age <= 14 &&
    person.distance >= 1900 && person.distance <= 1999){
    return 'Above average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 15 && person.age <= 16 &&
    person.distance >= 2000 && person.distance <= 2099){
    return 'Above average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 17 && person.age <= 19 &&
    person.distance >= 2100 && person.distance <= 2299){
    return 'Above average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 20 && person.age <= 29 &&
    person.distance >= 2200 && person.distance <= 2699){
    return 'Above average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 30 && person.age <= 39 &&
    person.distance >= 2000 && person.distance <= 2499){
    return 'Above average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 40 && person.age <= 49 &&
    person.distance >= 1900 && person.distance <= 2299){
    return 'Above average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 50 &&
    person.distance >= 1700 && person.distance <= 2199){
    return 'Above average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 13 && person.age <= 14 &&
    person.distance >= 2200 && person.distance <= 2399){
    return 'Average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 15 && person.age <= 16 &&
    person.distance >= 2300 && person.distance <= 2499){
    return 'Average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 17 && person.age <= 19 &&
    person.distance >= 2500 && person.distance <= 2699){
    return 'Average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 20 && person.age <= 29 &&
    person.distance >= 2200 && person.distance <= 2399){
    return 'Average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 30 && person.age <= 39 &&
    person.distance >= 1900 && person.distance <= 2299){
    return 'Average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 40 && person.age <= 49 &&
    person.distance >= 1700 && person.distance <= 2099){
    return 'Average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 50 &&
    person.distance >= 1600 && person.distance <= 1999){
    return 'Average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 13 && person.age <= 14 &&
    person.distance >= 1600 && person.distance <= 1899){
    return 'Average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 15 && person.age <= 16 &&
    person.distance >= 1700 && person.distance <= 1999){
    return 'Average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 17 && person.age <= 19 &&
    person.distance >= 1800 && person.distance <= 2099){
    return 'Average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 20 && person.age <= 29 &&
    person.distance >= 1800 && person.distance <= 2199){
    return 'Average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 30 && person.age <= 39 &&
    person.distance >= 1700 && person.distance <= 1999){
    return 'Average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 40 && person.age <= 49 &&
    person.distance >= 1500 && person.distance <= 1899){
    return 'Average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 50 &&
    person.distance >= 1400 && person.distance <= 1699){
    return 'Average';
    }
  if (person.gender === 'Male' &&
    person.age >= 13 && person.age <= 14 &&
    person.distance >= 2100 && person.distance <= 2199){
    return 'Below average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 15 && person.age <= 16 &&
    person.distance >= 2200 && person.distance <= 2299){
    return 'Below average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 17 && person.age <= 19 &&
    person.distance >= 2300 && person.distance <= 2499){
    return 'Below average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 20 && person.age <= 29 &&
    person.distance >= 1600 && person.distance <= 2199){
    return 'Below average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 30 && person.age <= 39 &&
    person.distance >= 1500 && person.distance <= 1999){
    return 'Below average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 40 && person.age <= 49 &&
    person.distance >= 1400 && person.distance <= 1699){
    return 'Below average';
    }
  else if (person.gender === 'Male' &&
    person.age >= 50 &&
    person.distance >= 1300 && person.distance <= 1599){
    return 'Below average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 13 && person.age <= 14 &&
    person.distance >= 1500 && person.distance <= 1599){
    return 'Below average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 15 && person.age <= 16 &&
    person.distance >= 1600 && person.distance <= 1699){
    return 'Below average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 17 && person.age <= 19 &&
    person.distance >= 1700 && person.distance <= 1799){
    return 'Below average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 20 && person.age <= 29 &&
    person.distance >= 1500 && person.distance <= 1799){
    return 'Below average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 30 && person.age <= 39 &&
    person.distance >= 1400 && person.distance <= 1699)){
    return 'Below average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 40 && person.age <= 49 &&
    person.distance >= 1200 && person.distance <= 1499){
    return 'Below average';
    }
  else if (person.gender === 'Female' &&
    person.age >= 50 &&
    person.distance >= 1100 && person.distance <= 1399){
    return 'Below average';
    }
  if (person.gender === 'Male' &&
    person.age >= 13 && person.age <= 14 &&
    person.distance < 2100){
    return 'Poor';
    }
  else if (person.gender === 'Male' &&
    person.age >= 15 && person.age <= 16 &&
    person.distance > 2200){
    return 'Poor';
    }
  else if (person.gender === 'Male' &&
    person.age >= 17 && person.age <= 19 &&
    person.distance > 2300){
    return 'Poor';
    }
  else if (person.gender === 'Male' &&
    person.age >= 20 && person.age <= 29 &&
    person.distance > 1600){
    return 'Poor';
    }
  else if (person.gender === 'Male' &&
    person.age >= 30 && person.age <= 39 &&
    person.distance > 1500){
    return 'Poor';
    }
  else if (person.gender === 'Male' &&
    person.age >= 40 && person.age <= 49 &&
    person.distance > 1400){
    return 'Poor';
    }
  else if (person.gender === 'Male' &&
    person.age >= 50 &&
    person.distance > 1300){
    return 'Poor';
    }
  else if (person.gender === 'Female' &&
    person.age >= 13 && person.age <= 14 &&
    person.distance > 1500){
    return 'Poor';
    }
  else if (person.gender === 'Female' &&
    person.age >= 15 && person.age <= 16 &&
    person.distance > 1600){
    return 'Poor';
    }
  else if (person.gender === 'Female' &&
    person.age >= 17 && person.age <= 19 &&
    person.distance > 1700){
    return 'Poor';
    }
  else if (person.gender === 'Female' &&
    person.age >= 20 && person.age <= 29 &&
    person.distance > 1500){
    return 'Poor';
    }
  else if (person.gender === 'Female' &&
    person.age >= 30 && person.age <= 39 &&
    person.distance > 1400){
    return 'Poor';
    }
  else if (person.gender === 'Female' &&
    person.age >= 40 && person.age <= 49 &&
    person.distance > 1200){
    return 'Poor';
    }
  else if (person.gender === 'Female' &&
    person.age >= 50 &&
    person.distance > 1100){
    return 'Poor';
    }
}
