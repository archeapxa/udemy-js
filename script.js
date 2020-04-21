// ********************** Variables and data types
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

/*
// *********************Variable mutation and type coercion

// Type coercion
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName); 
*/

// *****************Basic operators
/*
var now, yearJohn, yearJohn;
now = 2020;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2)
console.log(now * 2)
console.log(now / 10)

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageMark);
console.log(typeof 'Mark');
var x;
console.log(typeof x);
*/

// Operator precedence
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
// Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x , y);

// More operators

// x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/

/*
var johnMass, johnHeight, markMass, markHeight;

markMass = 80;
markHeight = 1.8;
johnMass = 80;
johnHeight = 1.9;

markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);

johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

var BMI = markBMI > johnBMI;
console.log(BMI);

console.log('Is Mark`s BMI is higher than John`s? ' + BMI);
*/

// IF
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon!');
}

var isMarried = false;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon!');
}


var johnMass, johnHeight, markMass, markHeight;

markMass = 80;
markHeight = 1.8;
johnMass = 80;
johnHeight = 1.9;
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

var BMI = markBMI > johnBMI;

if (markBMI > johnBMI) {
  console.log('Mark BMI is greater!');
} else {
  console.log('John BMI is greater!');
}
*/

// BOOLEAN LOGIC
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man');
} else {
  console.log(firstName + ' is a man');
}

// && - and
// || - or
// ! - not
*/

// DECISIONS

/*
var firstName = 'John';
var age = 12;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch statement

var job = 'teacher';
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives uber.');
    break;
  case 'designer':
    console.log(firstName + ' design websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}


switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man');
    break;
  default:
    console.log(firstName + ' is a man');
}

*/

// falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy
/*
var height;
// height = 0;
if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defied');
}

// === strict equality
// == different types
*/

/*
var scoreJohn = (89 +120 +103)/3;
var scoreMike = (116 + 94 + 123)/3;
var scoreMary = (97 + 134 + 105)/3;

console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log('John`s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log('Mike`s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreMike && scoreMary > scoreJohn) {
  console.log('Mary`s team wins with ' + scoreMike + ' points');
} else { 
  console.log('There is a draw'); 
}
*/

// if (scoreJohn > scoreMike) {
//   console.log('John`s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn) {
//   console.log('Mike`s team wins with ' + scoreMike + ' points');
// } else {
//   console.log('There is a draw');
// }



// **********************FUNCTIONS

function calculateAge(birthYear) {
  return 2018 - birthYear;
  }

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
  console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.');
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1968, 'Jane');