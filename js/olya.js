/*// Loops
document.write(`<h1>Amount of animals is ${animals.length}</h1>`);

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];

  document.write('Name ' + animal.name + '<br>');
  document.write('Type ' + animal.type + '<br>');
  document.write('Age ' + animal.age + '<br>');
}

// Addition function
function addTwoNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

let result = addTwoNumbers(2, 4);
document.write(`<h2> 2+4= ${result}</h2>`);

// Call yourself function 
function addEventListenerNew(callBack) {
  callBack();
}

addEventListenerNew(function () {
  document.write(`<h2>Hello world!</h2>`);
});

//Function with SetTimeout
for (var i = 1; i < 21; i++) {
  (function(j) {
    setTimeout(function () {
      document.write(j + '<br>');
    }, 1000);
  })(i);
}*/

/* FizzBuzz
document.write('<h2>FizzBuzz Program</h2>');

function FizzBuzz(firstNumber,lastNumber) {
 for (let firstNumber = 1; firstNumber < (lastNumber+1); firstNumber++) {
  if (firstNumber % 3 === 0 && firstNumber % 5 === 0) {
    document.write("FizzBuzz"+'<br>');
  } else if (firstNumber % 3 === 0) {
    document.write("Fizz"+'<br>');
  } else  if (firstNumber % 5 === 0) {
    document.write("Buzz"+'<br>');
  } else {
    document.write(firstNumber+'<br>');
  }
 }
}
 
FizzBuzz(1, 100); */

//The smallest number in array
document.write('<h2>Find the smalest number in array</h2>');
function theSmallestNumber(numbers) {
  if (numbers.length === 0) {
    document.write('null');
  } else {
    minNumber=numbers[0];
  for (let number = 1; number < numbers.length; number++) {
    if (numbers[number] < minNumber) {
      minNumber = numbers[number];
    } 
  }
  document.write(`<h3>Array: </h3>${test}<h3>The smalest number in this array is </h3>`);
  document.write(minNumber);
  }
}

const test = [23, 5, 8, 26, 89, 6, 58, 4, 56];
theSmallestNumber(test); 