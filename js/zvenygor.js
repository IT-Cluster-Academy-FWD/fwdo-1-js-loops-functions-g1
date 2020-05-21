document.write('<h1>Animals - ' + animals.length + '</h1>');

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  document.write('Name: ' + animal.name + '<br>');
  document.write('Type: ' + animal.type + '<br>');
  document.write('Age: ' + animal.age + '<br>');
}

function addTwoNumbers(x, y) {
  return x + y;
};

document.write('<h1>' + addTwoNumbers(1, 2) + '</h1>');

function addEventListener(callBack) {
  callBack();
}

addEventListener(function () {
  document.write('Hello World!');
});

for (let i = 0; i < 21; i++) {
  setTimeout(function () {
    document.write(i + '<br>')
  }, 1000);
}

