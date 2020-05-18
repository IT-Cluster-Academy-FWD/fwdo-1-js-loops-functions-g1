document.write('<h2>Animals ' + animals.length + '</h2>');

for (let i = 0; i <= animals.length; i++) {
  let animal = animals[i];
  document.write(animal.name + '<br>');
  document.write(animal.type + '<br>');
  document.write(animal.age + '<br>');
}
