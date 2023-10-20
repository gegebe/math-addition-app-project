//Hay que limpiarlo y simplicarlo...
let firstNumber; 
let secondNumber;
let total;
let mns;
let firstSpace; 
let secondSpace;
let userInput;
let button;

mns = document.querySelector("#message");

firstSpace = document.querySelector("#primary-number");
secondSpace = document.querySelector("#secondary-number");

firstNumber = getRandomArbitrary(0,10);
secondNumber = getRandomArbitrary(0,10);

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

total = firstNumber + secondNumber;
console.log(`soy el total: ${total}, del primero ${firstNumber} y el segundo ${secondNumber}`);
console.log(typeof firstNumber, typeof secondNumber);//number

button = document.querySelector("#btn");

firstSpace.textContent = firstNumber;//string
secondSpace.textContent = secondNumber;//string

console.log(typeof total);
console.log(typeof userInputInt);

function compareNumbers(){

  userInput = document.querySelector("#guess").value;
  console.log(typeof userInput);//string

  userInputInt = parseInt(userInput);
  console.log(typeof userInputInt);//number
  
  if(total == userInputInt){
    mns.textContent = "¡Es correcto!";
  } else {
    mns.textContent = "¡Error!";
  }
}

button.addEventListener("click", compareNumbers);