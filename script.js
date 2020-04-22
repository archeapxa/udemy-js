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
/*
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
*/

// FUNCTION STATEMENT

//declaration
//function whatDoYouDo(job, firstName) {}
/*
//expression
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' driver uber';
    case 'designer':
      return firstName + ' designs things';
    default:
      return firstName + ' is ' + job; 
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/
// ********************Arrays
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);


var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

john.indexOf(1990);
console.log(john.indexOf(1990))

console.log(john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer')
*/

// CODING CHALLENGE
/*
var bills = [124, 48,268];
console.log(bills[1])

function tip(amount) {
  switch(true) {
    case (amount < 50):
      return (amount * 0.2);
    case (amount >= 50) && (amount < 200):
      return (amount * 0.15);
    case (amount >= 200):
      return (amount * 0.1);
  }
}

var tips = [tip(bills[0]), tip(bills[1]), tip(bills[2])];
console.log('tips:', tips);
var tipsTotal = [tip(bills[0]) + bills[0], tip(bills[1]) + bills[1], tip(bills[2] + bills[2])];
console.log('tipsTotal:', tipsTotal);
*/
/*
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  };
  return percentage * bill;
}

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]),
          tipCalculator(bills[1]),
          tipCalculator(bills[2]),]

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],]

console.log(tips)
console.log(finalValues)

*/

// ************ Objects ************
/*
// object literal
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

// Objects and methods
/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function () { 
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
*/

// CODING CHALLENGE 4
/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 90,
  height: 1.92,
  calcBMI: function () { 
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

var mike = {
  firstName: 'Mike',
  lastName: 'Smith',
  mass: 90,
  height: 1.97,
  calcBMI: function () { 
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

if (john.calcBMI() > mike.calcBMI()) {
  console.log(john.firstName + ' ' + john.lastName + ' has the highest BMI of ' + john.BMI);
} else if (john.BMI < mike.BMI) {
  console.log(mike.firstName + ' ' + mike.lastName + ' has the highest BMI of ' + mike.BMI);
} else {
  console.log(john.firstName + ' and ' + mike.firstName + ' has the same BMI - ' + mike.BMI)
}
*/

// *********** LOOPS and ITERATION ***********
/*
for (var i = 0; i <= 20; i+=2) {
  console.log(i)
} 


var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

//FOR LOOP
for (let i = 0; i < john.length; i++) {
  console.log(john[i])
}

//WHILE LOOP
var i = 0
while (i < john.length) {
  console.log(john[i]);
  i++;
}
*/

/*
//continue and break statements
var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];
for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i])
}

for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i])
}

//looping backwards
for (let i = john.length - 1; i >= 0; i--) {
  // if (typeof john[i] !== 'string') continue;
  console.log(john[i])
}
*/


// CHALLENGE 5

var paymentsJohn = {
  bill: [124, 48, 268, 180, 42],
  tips: [],
  calcTip: function () {  
    var percentage;
    for (let i = 0; i < this.bill.length ; i++ ) {
      if (this.bill[i] < 50) {
        percentage = .2;
      } else if (this.bill[i] >= 50 && this.bill[i] < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      };
      this.tips.push(percentage * this.bill[i]);
      this.totalPay.push(this.bill[i] + this.tips[i]);
    }
  },
  totalPay: []
}

paymentsJohn.calcTip();
// console.log(paymentsJohn.tips)
// console.log(paymentsJohn.totalPay)

//MARK
var paymentsMark = {
  bill: [77, 375, 110, 45],
  tips: [],
  calcTip: function () {  
    var percentage;
    for (let i = 0; i < this.bill.length ; i++ ) {
      if (this.bill[i] < 100) {
        percentage = .2;
      } else if (this.bill[i] >= 100 && this.bill[i] < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      };
      this.tips.push(percentage * this.bill[i]);
      this.totalPay.push(this.bill[i] + this.tips[i]);
    }
  },
  totalPay: []
}

paymentsMark.calcTip();
// console.log(paymentsMark.tips)
// console.log(paymentsMark.totalPay)

function averageBill(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return average = total / array.length
}

// console.log(averageBill(paymentsMark.tips) + ' is average for Mark`s family');
// console.log(averageBill(paymentsJohn.tips) + ' is average for John`s family');

if (averageBill(paymentsMark.tips) > averageBill(paymentsJohn.tips)) {
  console.log('Mark`s family paid highest tip in average');
} else if (averageBill(paymentsMark.tips) < averageBill(paymentsJohn.tips)) {
  console.log('John`s family paid highest tip in average');
} else {
  console.log('Families average tip is the same');
}