// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // eslint-disable-next-line no-unused-vars
  let totalPoints = 0;
  let totalPointsWins = wins * 3;
  totalPoints = totalPointsWins + ties;
  return totalPoints;
}

// Desafio 6
// eslint-disable-next-line sonarjs/cognitive-complexity
function highestCount(numbers) {
  let highestNumber = 0;
  let highestCounter = 0;
  for (let index1 in numbers) {
    if (Math.abs(numbers[index1]) > highestNumber) {
      highestNumber = numbers[index1];
    }
  }
  for (let index2 in numbers) {
    if (numbers[index2] === highestNumber) {
      highestCounter += 1;
    }
  }
  return highestCounter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = mouse - cat1;
  let distanciaGato2 = mouse - cat2;
  if (Math.abs(distanciaGato2) > Math.abs(distanciaGato1)) {
    return 'cat1';
  } if (Math.abs(distanciaGato1) > Math.abs(distanciaGato2)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
