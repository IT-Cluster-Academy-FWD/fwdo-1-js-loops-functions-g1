function printList(list) {
  document.write(`<h2>Users: ${list.length}</h2>`);

  document.write('<ul class="to-do-list" >');

  for (const item of list) {
    document.write(`<li>${item}<button>x</button></li>`)
  }

  document.write('</ul>');
}

console.log(printList(['John', 'Bob', 'Mike', 'Jane', 'Nick', 'Jeremy', 'Lenon', 'John', 'Bob', 'Mike', 'Jane', 'Nick', 'Jeremy', 'Lenon', 'John', 'Bob', 'Mike', 'Jane', 'Nick', 'Jeremy', 'Lenon', 'John', 'Bob', 'Mike', 'Jane', 'Nick', 'Jeremy', 'Lenon']));

console.log(printList(['Nick', 'Jeremy', 'Lenon', 'Mike', 'Jane', 'John', 'Bob']))

// f(x,y) => x + y; f(2, 4) => 2 + 5 = 7;
function addition(x, y, z) {
  if (typeof z === 'undefined') {
    return x + y;
  }

  return x + y + z;
}

document.write('<p>');
document.write( '2 + 4 = ' + addition(2, 4));
document.write('</p>');

document.write('<p>');
document.write( '2 + 4 + 3 = ' + addition(2, 4, 3));
document.write('</p>');


const concat = (firstPart, secondPart) => firstPart + secondPart;
function concatFull(firstPart, secondPart) {
  return firstPart + secondPart;
}

document.write('<p>');
document.write( '"hello " + "world" = "' + concat("hello ", "world") + '"');
document.write('</p>');

const toDos = document.getElementsByTagName('li');
const deleteToDo = (event) => {
  event.target.parentElement.remove();
};


for (let i = 0; i < toDos.length; i++) {
  const element = toDos[i];
  const button = element.getElementsByTagName('button');
  button[0].addEventListener('click', deleteToDo);
}

const random = 50;

function addToRandom(newNumber) {
  return random + newNumber;
}

function subtractFromRandom(newNumber) {
  return random - newNumber;
}

document.write('<p>');
document.write( 'random + 5 = "' + addToRandom(5) + '"');
document.write('</p>');

document.write('<p>');
document.write( 'random - 5 = "' + subtractFromRandom(5) + '"');
document.write('</p>');


function addEventListenerCustom(eventType, eventHandler) {
  if (eventType === "click") {
    eventHandler();
  }
}

addEventListenerCustom('click', function () {
  console.log('Click have happened!');
});


let counter = 1;

function updateCounter() {
  counter++;
  return counter;
}

console.log(updateCounter(), counter);
console.log(updateCounter(), counter);
console.log(updateCounter(), counter);

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function() {
      console.log(j);
    }, 1000);
  })(i)
}

(function (text) {
  document.write(`<h2>${text}</h2>`)
})('Hello closure');