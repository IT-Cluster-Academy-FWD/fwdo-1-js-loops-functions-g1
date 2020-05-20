function addTwoNumbers(x, y) {

  return x + y;
}

document.write('<h1>');
document.write( 'Result: 5 + 2 = ' + addTwoNumbers(5, 2));
document.write('</h1>');


function addEventListener(firstWord, secondWord) {
  if (firstWord === "write") {
    secondWord();
  }
}

addEventListener('write', function () {
  document.write('Hello World!' + '<br>');
});

for (let counter = 1; counter <= 20; counter = counter + 1) {
(function (counter) {
  setTimeout(function() {
    document.write(counter + '<br>');
  }, 1000);
})(counter)
}


