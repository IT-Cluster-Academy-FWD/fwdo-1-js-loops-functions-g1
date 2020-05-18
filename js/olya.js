document.write(`<h1>Amount of animals is ${animals.length}</h1>`);

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];

  document.write('Name ' + animal.name + '<br>');
  document.write('Type ' + animal.type + '<br>');
  document.write('Age ' + animal.age + '<br>');
}