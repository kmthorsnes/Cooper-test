/*jshint esversion: 6 */

function Person(age, gender) {
  this.age = age;
  this.gender = gender.toLowerCase();

  result = (person, distance) => {
    let assessment;
    const Excellent = 'Excellent';
    const AboveAverage = 'Above Average';
    const Average = 'Average';
    const BelowAverage = 'Below Average';
    const Poor = 'Poor';

    switch(this.gender) {
      case "female":
        if(this.age >= 13 && this.age <= 14) {
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

        else if(this.age >= 15 && this.age <= 16) {
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

        else if(this.age >= 17 && this.age <= 19) {
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

        else if(this.age >= 20 && this.age <= 29) {
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

        else if(this.age >= 30 && this.age <= 39) {
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

        else if(this.age >= 40 && this.age <= 49) {
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

        else if(this.age >= 50) {
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

          console.log(assessment);
          break;

          case "male":
            if(this.age >= 13 && this.age <= 14) {
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

            else if(this.age >= 15 && this.age <= 16) {
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

            else if(this.age >= 17 && this.age <= 19) {
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

            else if(this.age >= 20 && this.age <= 29) {
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

            else if(this.age >= 30 && this.age <= 39) {
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

            else if(this.age >= 40 && this.age <= 49) {
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

            else if(this.age >= 50) {
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

              console.log(assessment);
              break;
      default:
          text = "I have never heard of that fruit...";
    }
  };

}



// function result(person) {
//   if (person.gender === 'Male' &&
//     person.age >= 13 && person.age <= 14 &&
//     person.distance > 2700){
//     return 'Excellent';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 15 && person.age <= 16 &&
//     person.distance > 2800){
//     return 'Excellent';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 17 && person.age <= 19 &&
//     person.distance > 3000){
//     return 'Excellent';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 20 && person.age <= 29 &&
//     person.distance > 2800){
//     return 'Excellent';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 30 && person.age <= 39 &&
//     person.distance > 2700){
//     return 'Excellent';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 40 && person.age <= 49 &&
//     person.distance > 2500){
//     return 'Excellent';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 50 &&
//     person.distance > 2400){
//     return 'Excellent';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 13 && person.age <= 14 &&
//     person.distance > 2000){
//     return 'Excellent';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 15 && person.age <= 16 &&
//     person.distance > 2100){
//     return 'Excellent';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 17 && person.age <= 19 &&
//     person.distance > 2300){
//     return 'Excellent';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 20 && person.age <= 29 &&
//     person.distance > 2700){
//     return 'Excellent';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 30 && person.age <= 39 &&
//     person.distance > 2500){
//     return 'Excellent';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 40 && person.age <= 49 &&
//     person.distance > 2300){
//     return 'Excellent';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 50 &&
//     person.distance > 2200){
//     return 'Excellent';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 13 && person.age <= 14 &&
//     person.distance >= 2400 && person.distance <= 2699){
//     return 'Above average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 15 && person.age <= 16 &&
//     person.distance >= 2500 && person.distance <= 2799){
//     return 'Above average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 17 && person.age <= 19 &&
//     person.distance >= 2700 && person.distance <= 2999){
//     return 'Above average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 20 && person.age <= 29 &&
//     person.distance >= 2400 && person.distance <= 2799){
//     return 'Above average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 30 && person.age <= 39 &&
//     person.distance >= 2300 && person.distance <= 2699){
//     return 'Above average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 40 && person.age <= 49 &&
//     person.distance >= 2100 && person.distance <= 2499){
//     return 'Above average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 50 &&
//     person.distance >= 2000 && person.distance <= 2399){
//     return 'Above average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 13 && person.age <= 14 &&
//     person.distance >= 1900 && person.distance <= 1999){
//     return 'Above average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 15 && person.age <= 16 &&
//     person.distance >= 2000 && person.distance <= 2099){
//     return 'Above average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 17 && person.age <= 19 &&
//     person.distance >= 2100 && person.distance <= 2299){
//     return 'Above average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 20 && person.age <= 29 &&
//     person.distance >= 2200 && person.distance <= 2699){
//     return 'Above average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 30 && person.age <= 39 &&
//     person.distance >= 2000 && person.distance <= 2499){
//     return 'Above average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 40 && person.age <= 49 &&
//     person.distance >= 1900 && person.distance <= 2299){
//     return 'Above average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 50 &&
//     person.distance >= 1700 && person.distance <= 2199){
//     return 'Above average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 13 && person.age <= 14 &&
//     person.distance >= 2200 && person.distance <= 2399){
//     return 'Average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 15 && person.age <= 16 &&
//     person.distance >= 2300 && person.distance <= 2499){
//     return 'Average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 17 && person.age <= 19 &&
//     person.distance >= 2500 && person.distance <= 2699){
//     return 'Average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 20 && person.age <= 29 &&
//     person.distance >= 2200 && person.distance <= 2399){
//     return 'Average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 30 && person.age <= 39 &&
//     person.distance >= 1900 && person.distance <= 2299){
//     return 'Average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 40 && person.age <= 49 &&
//     person.distance >= 1700 && person.distance <= 2099){
//     return 'Average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 50 &&
//     person.distance >= 1600 && person.distance <= 1999){
//     return 'Average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 13 && person.age <= 14 &&
//     person.distance >= 1600 && person.distance <= 1899){
//     return 'Average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 15 && person.age <= 16 &&
//     person.distance >= 1700 && person.distance <= 1999){
//     return 'Average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 17 && person.age <= 19 &&
//     person.distance >= 1800 && person.distance <= 2099){
//     return 'Average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 20 && person.age <= 29 &&
//     person.distance >= 1800 && person.distance <= 2199){
//     return 'Average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 30 && person.age <= 39 &&
//     person.distance >= 1700 && person.distance <= 1999){
//     return 'Average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 40 && person.age <= 49 &&
//     person.distance >= 1500 && person.distance <= 1899){
//     return 'Average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 50 &&
//     person.distance >= 1400 && person.distance <= 1699){
//     return 'Average';
//     }
//   if (person.gender === 'Male' &&
//     person.age >= 13 && person.age <= 14 &&
//     person.distance >= 2100 && person.distance <= 2199){
//     return 'Below average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 15 && person.age <= 16 &&
//     person.distance >= 2200 && person.distance <= 2299){
//     return 'Below average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 17 && person.age <= 19 &&
//     person.distance >= 2300 && person.distance <= 2499){
//     return 'Below average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 20 && person.age <= 29 &&
//     person.distance >= 1600 && person.distance <= 2199){
//     return 'Below average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 30 && person.age <= 39 &&
//     person.distance >= 1500 && person.distance <= 1999){
//     return 'Below average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 40 && person.age <= 49 &&
//     person.distance >= 1400 && person.distance <= 1699){
//     return 'Below average';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 50 &&
//     person.distance >= 1300 && person.distance <= 1599){
//     return 'Below average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 13 && person.age <= 14 &&
//     person.distance >= 1500 && person.distance <= 1599){
//     return 'Below average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 15 && person.age <= 16 &&
//     person.distance >= 1600 && person.distance <= 1699){
//     return 'Below average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 17 && person.age <= 19 &&
//     person.distance >= 1700 && person.distance <= 1799){
//     return 'Below average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 20 && person.age <= 29 &&
//     person.distance >= 1500 && person.distance <= 1799){
//     return 'Below average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 30 && person.age <= 39 &&
//     person.distance >= 1400 && person.distance <= 1699)){
//     return 'Below average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 40 && person.age <= 49 &&
//     person.distance >= 1200 && person.distance <= 1499){
//     return 'Below average';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 50 &&
//     person.distance >= 1100 && person.distance <= 1399){
//     return 'Below average';
//     }
//   if (person.gender === 'Male' &&
//     person.age >= 13 && person.age <= 14 &&
//     person.distance < 2100){
//     return 'Poor';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 15 && person.age <= 16 &&
//     person.distance > 2200){
//     return 'Poor';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 17 && person.age <= 19 &&
//     person.distance > 2300){
//     return 'Poor';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 20 && person.age <= 29 &&
//     person.distance > 1600){
//     return 'Poor';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 30 && person.age <= 39 &&
//     person.distance > 1500){
//     return 'Poor';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 40 && person.age <= 49 &&
//     person.distance > 1400){
//     return 'Poor';
//     }
//   else if (person.gender === 'Male' &&
//     person.age >= 50 &&
//     person.distance > 1300){
//     return 'Poor';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 13 && person.age <= 14 &&
//     person.distance > 1500){
//     return 'Poor';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 15 && person.age <= 16 &&
//     person.distance > 1600){
//     return 'Poor';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 17 && person.age <= 19 &&
//     person.distance > 1700){
//     return 'Poor';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 20 && person.age <= 29 &&
//     person.distance > 1500){
//     return 'Poor';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 30 && person.age <= 39 &&
//     person.distance > 1400){
//     return 'Poor';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 40 && person.age <= 49 &&
//     person.distance > 1200){
//     return 'Poor';
//     }
//   else if (person.gender === 'Female' &&
//     person.age >= 50 &&
//     person.distance > 1100){
//     return 'Poor';
//     }
// }
