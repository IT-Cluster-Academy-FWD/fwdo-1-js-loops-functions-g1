document.write(`<h1>Amount of animals is ${animals.length}</h1>`);

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];

  document.write('Name ' + animal.name + '<br>');
  document.write('Type ' + animal.type + '<br>');
  document.write('Age ' + animal.age + '<br>');
}

//Addition function
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

for (var i = 1; i < 21; i++) {
  (function(j) {
    setTimeout(function () {
      document.write(j + '<br>');
    }, 1000);
  })(i);
}