let firstNumber = prompt("Digite o primeiro número.");
let secondNumber = prompt("Digite o segundo número.");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const rest = firstNumber % secondNumber;

alert('A soma é: ' + sum)
alert('A subtração é: ' + sub)
alert('A multiplicação é: ' + multi)
alert('A divisão é: ' + div)
alert('O resto é: ' + rest)

var total = Number(sum)
    if(sum % 2 == 0) {
        alert('Este número é par.')
    } else {
        alert('Este número é impar.')
    }

var dif = Number()
    if(firstNumber != secondNumber) {
        alert('Os números são diferentes.')
    } else {
        alert('Os números são iguais.')
    }