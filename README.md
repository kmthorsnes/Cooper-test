# Cooper test

This JavaScript will help you to understand how your test results on the cooper test compare with standards.

### Required Resources for the actual test

To undertake this test you will require:

* 400 meter track
* Stopwatch
* Whistle
* Assistant
* How to conduct the test
* This test requires the athlete to run as far as possible in 12 minutes.

* The athlete warms up for 10 minutes
* The assistant gives the command “GO”,  starts the stopwatch and the athlete commences the test
* The assistant keeps the athlete informed of the remaining time at the end of each lap (400m)
* The assistant blows the whistle when the 12 minutes has elapsed and records the distance the athlete covered to the nearest 10 meters

## Getting your score in JavaScript

1. Open https://kmthorsnes.github.io/cooper_test/index.html in your prefered browser
2. Open console
3. Enter your age and gender in the following format:

```
$ person = new Person(age, gender);
```
Gender should be entered like either:

* "Male" <br/>or
* "Female"

4. After this you should enter the total number of meters you ran durint the 10 minute Cooper test.
```
$ result(person, yourDistanceInMeters);
```
Example of input:
```
$ person = new Person(32, "Male");
$ result(person, 1800);
=> Average
```
After the result command the output will show if your run was either of the following: <br/>
* Excellent
* Above Average,
* Average
* Below Average
* Poor

## Acknowledgments

* inBeween-method by Pointy
https://stackoverflow.com/questions/6454198/check-a-range-of-numbers-in-an-if-condition

* This product was powered by KalleBoll Inc.
