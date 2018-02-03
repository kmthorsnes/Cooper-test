/*jshint esversion: 6 */
class Person {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }
}

// returns true if 'distance' is within the given range
isBetween = (distance, max, min) => {
  return distance >= min && distance <= max;
};

let assessment;
result = (person, distance) => {
  // sets the different assessments results
  const Excellent = 'Excellent';
  const AboveAverage = 'Above Average';
  const Average = 'Average';
  const BelowAverage = 'Below Average';
  const Poor = 'Poor';

  // Performs different calculations depending
  // on gender and age
  switch(person.gender) {
    case "female":
      if(person.age >= 13 && person.age <= 14) {
        if(distance > 2000) {
          assessment = Excellent;
        } else if (isBetween(distance, 1999, 1900)) {
          assessment = AboveAverage;
        } else if (isBetween(distance, 1899, 1600)) {
          assessment = Average;
        } else if (isBetween(distance, 1599, 1500)) {
          assessment = BelowAverage;
        } else if (distance < 1500) {
          assessment = Poor;
        }
      }

      else if(person.age >= 15 && person.age <= 16) {
        if(distance > 2100) {
          assessment = Excellent;
        } else if (isBetween(distance, 2099, 2000)) {
          assessment = AboveAverage;
        } else if (isBetween(distance, 1999, 1700)) {
          assessment = Average;
        } else if (isBetween(distance, 1699, 1600)) {
          assessment = BelowAverage;
        } else if (distance < 1600) {
          assessment = Poor;
        }
      }

      else if(person.age >= 17 && person.age <= 19) {
        if(distance > 2300) {
          assessment = Excellent;
        } else if (isBetween(distance, 2299, 2100)) {
          assessment = AboveAverage;
        } else if (isBetween(distance, 2099, 1800)) {
          assessment = Average;
        } else if (isBetween(distance, 1799, 1700)) {
          assessment = BelowAverage;
        } else if (distance < 1700) {
          assessment = Poor;
        }
      }

      else if(person.age >= 20 && person.age <= 29) {
        if(distance > 2700) {
          assessment = Excellent;
        } else if (isBetween(distance, 2699, 2200)) {
          assessment = AboveAverage;
        } else if (isBetween(distance, 2199, 1800)) {
          assessment = Average;
        } else if (isBetween(distance, 1799, 1500)) {
          assessment = BelowAverage;
        } else if (distance < 1500) {
          assessment = Poor;
        }
      }

      else if(person.age >= 30 && person.age <= 39) {
        if(distance > 2500) {
          assessment = Excellent;
        } else if (isBetween(distance, 2499, 2000)) {
          assessment = AboveAverage;
        } else if (isBetween(distance, 1999, 1700)) {
          assessment = Average;
        } else if (isBetween(distance, 1699, 1400)) {
          assessment = BelowAverage;
        } else if (distance < 1400) {
          assessment = Poor;
        }
      }

      else if(person.age >= 40 && person.age <= 49) {
        if(distance > 2300) {
          assessment = Excellent;
        } else if (isBetween(distance, 2299, 1900)) {
          assessment = AboveAverage;
        } else if (isBetween(distance, 1899, 1500)) {
          assessment = Average;
        } else if (isBetween(distance, 1499, 1200)) {
          assessment = BelowAverage;
        } else if (distance < 1200) {
          assessment = Poor;
        }
      }

      else if(person.age >= 50) {
        if(distance > 2200) {
          assessment = Excellent;
        } else if (isBetween(distance, 2199, 1700)) {
          assessment = AboveAverage;
        } else if (isBetween(distance, 1699, 1400)) {
          assessment = Average;
        } else if (isBetween(distance, 1399, 1100)) {
          assessment = BelowAverage;
        } else if (distance < 1100) {
          assessment = Poor;
        }
      }
        // Prints the results to the console
        console.log(assessment);
        break;

    case "male":
        if(person.age >= 13 && person.age <= 14) {
          if(distance > 2700) {
            assessment = Excellent;
          } else if (isBetween(distance, 2699, 2400)) {
            assessment = AboveAverage;
          } else if (isBetween(distance, 2399, 2200)) {
            assessment = Average;
          } else if (isBetween(distance, 2199, 2100)) {
            assessment = BelowAverage;
          } else if (distance < 2100) {
            assessment = Poor;
          }
        }

        else if(person.age >= 15 && person.age <= 16) {
          if(distance > 2800) {
            assessment = Excellent;
          } else if (isBetween(distance, 2799, 2500)) {
            assessment = AboveAverage;
          } else if (isBetween(distance, 2499, 2300)) {
            assessment = Average;
          } else if (isBetween(distance, 2299, 2200)) {
            assessment = BelowAverage;
          } else if (distance < 2200) {
            assessment = Poor;
          }
        }

        else if(person.age >= 17 && person.age <= 19) {
          if(distance > 3000) {
            assessment = Excellent;
          } else if (isBetween(distance, 2999, 2700)) {
            assessment = AboveAverage;
          } else if (isBetween(distance, 2699, 2500)) {
            assessment = Average;
          } else if (isBetween(distance, 2499, 2300)) {
            assessment = BelowAverage;
          } else if (distance < 2300) {
            assessment = Poor;
          }
        }

        else if(person.age >= 20 && person.age <= 29) {
          if(distance > 2800) {
            assessment = Excellent;
          } else if (isBetween(distance, 2799, 2400)) {
            assessment = AboveAverage;
          } else if (isBetween(distance, 2399, 2200)) {
            assessment = Average;
          } else if (isBetween(distance, 2199, 1600)) {
            assessment = BelowAverage;
          } else if (distance < 1600) {
            assessment = Poor;
          }
        }

        else if(person.age >= 30 && person.age <= 39) {
          if(distance > 2700) {
            assessment = Excellent;
          } else if (isBetween(distance, 2699, 2300)) {
            assessment = AboveAverage;
          } else if (isBetween(distance, 2299, 2000)) {
            assessment = Average;
          } else if (isBetween(distance, 1999, 1500)) {
            assessment = BelowAverage;
          } else if (distance < 1500) {
            assessment = Poor;
          }
        }

        else if(person.age >= 40 && person.age <= 49) {
          if(distance > 2500) {
            assessment = Excellent;
          } else if (isBetween(distance, 2499, 2100)) {
            assessment = AboveAverage;
          } else if (isBetween(distance, 2099, 1700)) {
            assessment = Average;
          } else if (isBetween(distance, 1699, 1400)) {
            assessment = BelowAverage;
          } else if (distance < 1400) {
            assessment = Poor;
          }
        }

        else if(person.age >= 50) {
          if(distance > 2400) {
            assessment = Excellent;
          } else if (isBetween(distance, 2399, 2000)) {
            assessment = AboveAverage;
          } else if (isBetween(distance, 1999, 1600)) {
            assessment = Average;
          } else if (isBetween(distance, 1599, 1300)) {
            assessment = BelowAverage;
          } else if (distance < 1300) {
            assessment = Poor;
          }
        }
        // Prints the results to the console
        console.log(assessment);
        break;

    default:
      // console.log(assessment);
      console.log("It's game over man, it's game over..");
  } // end of switch
}; // end of result-function
