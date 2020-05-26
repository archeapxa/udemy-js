// Lecture: let and const
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller';
console.log(name6);
*/

/*
// ES5
function driversLicense5(passedTest) {
  if (passedTest) {
    console.log(firstName);
    var firstName = 'John';
    var yearOfBirth = 1990;
  }
  console.log(firstName + yearOfBirth + ', allowed to drive a car!');
}

driversLicense5(true);

// ES6
function driversLicense6(passedTest) {
  console.log(firstName);
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
  }
  console.log(firstName + ' ' + yearOfBirth + ', allowed to drive a car!');
}

driversLicense6(true);
*/
/*
let i = 23;
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i)
*/
/*
{
  const a = 1;
  let b = 2;
  console.log(a + b)
}
*/
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
  return 2016 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + ' he is ' + calcAge(yearOfBirth));

// ES6
console.log(`This is ${firstName} ${lastName} he is ${calcAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;
n.startsWith('J');
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
*/
/*
const years = [1990, 1956, 1982, 1937];

// ES5 
var ages5 = years.map(function(el) {
  return 2016 - el;
})

console.log(ages5);

// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}`);
console.log(ages6)

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}`
});

console.log(ages6);
*/

//ES 5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
}
//box5.clickMe();

//ES 6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
box6.clickMe();

/*
//ES 6
const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
box66.clickMe();
*/
/*
function Person(name) {
  this.name = name;
};

//ES 5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el
  }.bind(this));
  console.log(arr);
}

var friends = ['Bob', 'Jane' , 'Mark'];
//new Person('John').myFriends5(friends);

//ES6
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map((el) => `${this.name} is friends with ${el}`);
  console.log(arr);
}

var friends = ['Bob', 'Jane' , 'Mark'];
new Person('Mike').myFriends6(friends);
*/

// ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

/*
//ES6
const [name, age] = ['John', 26]
console.log(name);
console.log(age);

const obj = {
  firstName: 'John',
  lastName: 'Smith'
};
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);
*/


/*
function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1993);

console.log(age);
console.log(retirement);
*/

// Arrays
/*
const boxes = document.querySelectorAll('.box');
console.log(boxes);

//ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes)
console.log(boxesArr5);
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = 'dodgerblue';
});

const boxesArr6 = Array.from(boxes)
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerBlue');
*/
//ES5
/*
for(var i = 0; i < boxesArr5.length; i++) {
  if(boxesArr5[i].className === 'box blue') {
    continue;
  } 
  boxesArr5[i].textContent = 'I changed to blue'
}
*/
/*
//ES6
for (const cur of boxesArr6) {
  if (cur.className.includes('blue')) {
    continue;
  }
  cur.textContent = 'I changed to blue'
}

//ES5
var ages = [12, 17, 8, 21, 22, 11];
var full = ages.map(function(cur) {
  return cur >= 18
});
full.indexOf(true)
console.log(ages[full.indexOf(true)]);

//ES6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

// SPREAD
/*
function addFourAges (a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 35, 12);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
console.log(all);

Array.from(all).forEach(cur => cur.style)
*/

// REST PARAMETERS
/*
// ES5
function isFullAge5() {
  var argsArray = Array.prototype.slice.call(arguments);
  console.log(argsArray);

  argsArray.forEach(function(cur) {
    console.log((2016 - cur) >= 18)
  });
}
//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAge6 (...years) {
  years.forEach(cur => console.log((2016 - cur) >= 18));
} 
isFullAge6(1990, 1999, 1965, 2016, 1987);
*/

/*
function isFullAge5(limit) {
  var argsArray = Array.prototype.slice.call(arguments, 1);
  console.log(argsArray);

  argsArray.forEach(function(cur) {
    console.log((2016 - cur) >= limit)
  });
}
//isFullAge5(21, 1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAge6 (limit, ...years) {
  years.forEach(cur => console.log((2016 - cur) >= limit));
} 
isFullAge6(12, 1990, 1999, 1965, 2016, 1987);
*/

// DEFAULT PARAMETERS

//ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? lastName = 'Smith' : lastName = lastName;
  nationality === undefined ? nationality = 'american' : nationality = nationality;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990)
console.log(john);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish')
console.log(emily)
*/

/*
//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}


var john = new SmithPerson('John', 1990)
console.log(john);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish')
console.log(emily)
*/


// LECTURE: MAPS

const question = new Map();
question.set('question', 'What is the official name of the latets major JS version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong,  try again');

question.get('question')
console.log( question.get('question'));
// console.log(question.size);

if (question.has(4)) {
//  question.delete(4);
}
//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and its set to ${value}`));

for (let [key, value] of question.entries()) {
  if (typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
};

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
