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
  let totalPoints = 0;
  let totalPointsWins = wins * 3;
  totalPoints = totalPointsWins + ties;
  return totalPoints;
}

// Desafio 6
//
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
function fizzBuzz(numbers) {
  let fizzBuzzArray = [];
  for (let index in numbers) {
    if (numbers[index] % 5 === 0 && numbers[index] % 3 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (numbers[index] % 5 !== 0 && numbers[index] % 3 !== 0) {
      fizzBuzzArray.push('bug!');
    } else if (numbers[index] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('fizz');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  let arrayString = string.split('');
  for (let index = 0; index < arrayString.length; index += 1) {
    switch (arrayString[index]) {
    case 'a': arrayString.splice(index, 1, '1'); break;
    case 'e': arrayString.splice(index, 1, '2'); break;
    case 'i': arrayString.splice(index, 1, '3'); break;
    case 'o': arrayString.splice(index, 1, '4'); break;
    case 'u': arrayString.splice(index, 1, '5'); break;
    default:
    }
  }
  return arrayString.join('');
}
function decode(string) {
  let arrayString = string.split('');
  for (let index = 0; index < arrayString.length; index += 1) {
    switch (arrayString[index]) {
    case '1': arrayString.splice(index, 1, 'a'); break;
    case '2': arrayString.splice(index, 1, 'e'); break;
    case '3': arrayString.splice(index, 1, 'i'); break;
    case '4': arrayString.splice(index, 1, 'o'); break;
    case '5': arrayString.splice(index, 1, 'u'); break;
    default:
    }
  }
  return arrayString.join('');
}

// Desafio 10
function techList(tecnologias, nome) {
  if (tecnologias.length <= 0 || nome.length <= 0) {
    return 'Vazio!';
  }
  let conhecimentos = [];
  tecnologias.sort();
  for (let index = 0; index < tecnologias.length; index += 1) {
    conhecimentos.push({
      tech: tecnologias[index],
      name: nome,
    });
  }
  return conhecimentos;
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
