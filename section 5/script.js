// Function constructor

/*var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function () {
  console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

*/

// Object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth)
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer' }
});
*/


// Primitives vs objects

/*
//primitives
var a = 23;
var b = a;
a = 46;
console.log(a,b)




// objects
var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1;
obj2.age = 30;
console.log(obj1)
console.log(obj2)


// Function

var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon',

};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age)
console.log(obj.city)
*/

/////////////////
// PASSING FUNCTIONS AS ARGUMENTS
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81){
  return Math.round(206.9 - (0.76 * el));
  } else {
    return -1;
  }
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages)
console.log(fullAges)
console.log(rates)
*/

/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what is UX?')
    }
  } else if ( job === 'teacher') {
    return function (name) {
      console.log(name + ', what subject do you teach?')
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer')


teacherQuestion('John');
designerQuestion('Mark')

interviewQuestion('teacher')('MAX');
*/



// IIFE
/*
function game () {
  var score = Math.random() * 10;
  console.log(score >= 5)
}

game();
*/

/*
(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5)
})();

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck)
})(5);
*/

// CLOSURES
/*
function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);



//retirement(66)(1990);


function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what is UX?')
    }
  } else if ( job === 'teacher') {
    return function (name) {
      console.log(name + ', what subject do you teach?')
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}


function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what is UX?')
    } else if ( job === 'teacher') {
      console.log(name + ', what subject do you teach?')
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

interviewQuestion('teacher')('John')
*/

// BIND CALL APPLY
/*
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ' ladies and gentleman! I`m ' + this.name + ', I`m a ' + this.job + ' and I`m ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What`s up? I`m ' + this.name + ', I`m a ' + this.job + ' and I`m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');
john.presentation.apply(emily, ['formal' , 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('high noon');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon')





var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/
/*
(function() {

function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.displayQuestion = function() {
  console.log(this.question);

  for(var i = 0; i < this.answers.length; i++) {
    console.log(i + ': ' + this.answers[i]);
  }
}

Question.prototype.checkAnswer = function(ans) {
  if (ans === this.correct) {
    console.log('Correct answer!')
  } else {
    console.log('Wrong answer! Try it again')
  }
}

var q1 = new Question('Is JavaScripts the coolest programmin language?', ['Yes', 'No'], 0);

var q2 = new Question('What`s the name of this course`s teacher?', ['John', 'Michael', 'Jonas'], 2);

var q3 = new Question('What does best describe coding??', ['Boring', 'Hard', 'Fun', 'Tidious'], 2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt('Please select correct answer.'));

questions[n].checkAnswer(answer);

})();
*/


(function() {

  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
  
    for(var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }
  
  Question.prototype.checkAnswer = function(ans, callback) {
    if (ans === this.correct) {
      var sc;

      console.log('Correct answer!');
      sc = callback(true);
    } else {
      console.log('Wrong answer! Try it again')

      sc = callback(false);
    }
    this.displayScore(sc);
  }
  
  Question.prototype.displayScore = function (score) {
    console.log('Your currnt score is: ' + score);
    console.log('-------------------------');
  }

  var q1 = new Question('Is JavaScripts the coolest programmin language?', ['Yes', 'No'], 0);
  
  var q2 = new Question('What`s the name of this course`s teacher?', ['John', 'Michael', 'Jonas'], 2);
  
  var q3 = new Question('What does best describe coding??', ['Boring', 'Hard', 'Fun', 'Tidious'], 2);
  
  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      } 
      return sc;
    }
  }
  var keepScore = score();

  function nextQuestion() {

    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    var answer = prompt('Please select correct answer.');
    
    if(answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }

  nextQuestion();

  })();