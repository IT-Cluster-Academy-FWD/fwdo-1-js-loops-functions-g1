document.write('<h2>Animals ' + animals.length + '</h2>');

for (let i = 0; i <= animals.length; i++) {
  let animal = animals[i];
  document.write(animal.name + '<br>');
  document.write(animal.type + '<br>');
  document.write(animal.age + '<br>');
}

function addTwoNumbers(x, y) {
  return x+y;
}

document.write(addTwoNumbers(2, 3));
document.write('<h1>'+ addTwoNumbers + '</h1>');

function addEventListener(callback){
  callback();
}
addEventListener(function () {
  document.write('Hello world');
});

for(let i = 0; i < 20; i++) {
  setTimeout(function() {
  console.log(i);
  }, 1000);
}