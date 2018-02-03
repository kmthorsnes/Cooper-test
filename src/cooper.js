/*jshint esversion: 6 */
class Person {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }
}

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
        } else if (distance <= 1999 && distance >= 1900) {
          assessment = AboveAverage;
        } else if (distance <= 1899 && distance >= 1600) {
          assessment = Average;
        } else if (distance <= 1599 && distance >= 1500) {
          assessment = BelowAverage;
        } else if (distance < 1500) {
          assessment = Poor;
        }
      }

      else if(person.age >= 15 && person.age <= 16) {
        if(distance > 2100) {
          assessment = Excellent;
        } else if (distance <= 2099 && distance >= 2000) {
          assessment = AboveAverage;
        } else if (distance <= 1999 && distance >= 1700) {
          assessment = Average;
        } else if (distance <= 1699 && distance >= 1600) {
          assessment = BelowAverage;
        } else if (distance < 1600) {
          assessment = Poor;
        }
      }

      else if(person.age >= 17 && person.age <= 19) {
        if(distance > 2300) {
          assessment = Excellent;
        } else if (distance <= 2299 && distance >= 2100) {
          assessment = AboveAverage;
        } else if (distance <= 2099 && distance >= 1800) {
          assessment = Average;
        } else if (distance <= 1799 && distance >= 1700) {
          assessment = BelowAverage;
        } else if (distance < 1700) {
          assessment = Poor;
        }
      }

      else if(person.age >= 20 && person.age <= 29) {
        if(distance > 2700) {
          assessment = Excellent;
        } else if (distance <= 2699 && distance >= 2200) {
          assessment = AboveAverage;
        } else if (distance <= 2199 && distance >= 1800) {
          assessment = Average;
        } else if (distance <= 1799 && distance >= 1500) {
          assessment = BelowAverage;
        } else if (distance < 1500) {
          assessment = Poor;
        }
      }

      else if(person.age >= 30 && person.age <= 39) {
        if(distance > 2500) {
          assessment = Excellent;
        } else if (distance <= 2499 && distance >= 2000) {
          assessment = AboveAverage;
        } else if (distance <= 1999 && distance >= 1700) {
          assessment = Average;
        } else if (distance <= 1699 && distance >= 1400) {
          assessment = BelowAverage;
        } else if (distance < 1400) {
          assessment = Poor;
        }
      }

      else if(person.age >= 40 && person.age <= 49) {
        if(distance > 2300) {
          assessment = Excellent;
        } else if (distance <= 2299 && distance >= 1900) {
          assessment = AboveAverage;
        } else if (distance <= 1899 && distance >= 1500) {
          assessment = Average;
        } else if (distance <= 1499 && distance >= 1200) {
          assessment = BelowAverage;
        } else if (distance < 1200) {
          assessment = Poor;
        }
      }

      else if(person.age >= 50) {
        if(distance > 2200) {
          assessment = Excellent;
        } else if (distance <= 2199 && distance >= 1700) {
          assessment = AboveAverage;
        } else if (distance <= 1699 && distance >= 1400) {
          assessment = Average;
        } else if (distance <= 1399 && distance >= 1100) {
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
          } else if (distance <= 2699 && distance >= 2400) {
            assessment = AboveAverage;
          } else if (distance <= 2399 && distance >= 2200) {
            assessment = Average;
          } else if (distance <= 2199 && distance >= 2100) {
            assessment = BelowAverage;
          } else if (distance < 2100) {
            assessment = Poor;
          }
        }

        else if(person.age >= 15 && person.age <= 16) {
          if(distance > 2800) {
            assessment = Excellent;
          } else if (distance <= 2799 && distance >= 2500) {
            assessment = AboveAverage;
          } else if (distance <= 2499 && distance >= 2300) {
            assessment = Average;
          } else if (distance <= 2299 && distance >= 2200) {
            assessment = BelowAverage;
          } else if (distance < 2200) {
            assessment = Poor;
          }
        }

        else if(person.age >= 17 && person.age <= 19) {
          if(distance > 3000) {
            assessment = Excellent;
          } else if (distance <= 2999 && distance >= 2700) {
            assessment = AboveAverage;
          } else if (distance <= 2699 && distance >= 2500) {
            assessment = Average;
          } else if (distance <= 2499 && distance >= 2300) {
            assessment = BelowAverage;
          } else if (distance < 2300) {
            assessment = Poor;
          }
        }

        else if(person.age >= 20 && person.age <= 29) {
          if(distance > 2800) {
            assessment = Excellent;
          } else if (distance <= 2799 && distance >= 2400) {
            assessment = AboveAverage;
          } else if (distance <= 2399 && distance >= 2200) {
            assessment = Average;
          } else if (distance <= 2199 && distance >= 1600) {
            assessment = BelowAverage;
          } else if (distance < 1600) {
            assessment = Poor;
          }
        }

        else if(person.age >= 30 && person.age <= 39) {
          if(distance > 2700) {
            assessment = Excellent;
          } else if (distance <= 2699 && distance >= 2300) {
            assessment = AboveAverage;
          } else if (distance <= 2299 && distance >= 2000) {
            assessment = Average;
          } else if (distance <= 1999 && distance >= 1500) {
            assessment = BelowAverage;
          } else if (distance < 1500) {
            assessment = Poor;
          }
        }

        else if(person.age >= 40 && person.age <= 49) {
          if(distance > 2500) {
            assessment = Excellent;
          } else if (distance <= 2499 && distance >= 2100) {
            assessment = AboveAverage;
          } else if (distance <= 2099 && distance >= 1700) {
            assessment = Average;
          } else if (distance <= 1699 && distance >= 1400) {
            assessment = BelowAverage;
          } else if (distance < 1400) {
            assessment = Poor;
          }
        }

        else if(person.age >= 50) {
          if(distance > 2400) {
            assessment = Excellent;
          } else if (distance <= 2399 && distance >= 2000) {
            assessment = AboveAverage;
          } else if (distance <= 1999 && distance >= 1600) {
            assessment = Average;
          } else if (distance <= 1599 && distance >= 1300) {
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
