
function addTwoNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

let result = addTwoNumbers(2, 19);

document.write('<h1> 2 + 19 = ' + result + '</h2>');

function addEventListener (callBack) {
  callBack();
}

addEventListener (function() {
  document.write('<h2>Hello Nazar</h2>');
});

for (var i = 0; i < 20; i++ ) {
  setTimeout(function(){
    console.log(i);
  }, 1000);
}








