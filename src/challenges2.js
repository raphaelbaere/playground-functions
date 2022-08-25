// Desafio 11
function generatePhoneNumber(numero) {
  let contRepeter = 0;
  if (numero.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numero.length; index += 1) {
    for (let index2 = 0; index2 < numero.length; index2 += 1) {
      if (numero[index] === numero[index2]) {
        contRepeter += 1;
      }
    }
    if (numero[index] < 0 || numero[index] > 9 || contRepeter >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    contRepeter = 0;
  }
  return '(' + numero[0] + numero[1] + ')' + ' ' + numero[2] + numero[3] + 
    numero[4] + numero[5] + numero[6] + '-' + numero[7] + numero[8] + numero[9] + numero[10];
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < lineB + lineC && lineA > Math.abs(lineB) - Math.abs(lineC) && 
  lineB < lineC + lineA && lineB > Math.abs(lineC) - Math.abs(lineA) &&
  lineC < lineA + lineB && lineC > Math.abs(lineA) - Math.abs(lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let reg = /\d+/g;
  let result = string.match(reg);
  let somaBebidas = 0;

  for (let index = 0; index < result.length; index += 1) {
    somaBebidas += parseInt(result[index])
  }
  if (somaBebidas === 1) {
    return somaBebidas + ' ' + 'copo de água'
  }
  return somaBebidas + ' ' + 'copos de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
