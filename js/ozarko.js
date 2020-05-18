document.write('<h2>We have ' + animals.length + ' animals. And we are happy </h2>');

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  document.write('We have an animal: ' + animal.type + '. Its name: ' + animal.name + '. it lives with us ' + animal.age + ' years.' + '<br>');
}