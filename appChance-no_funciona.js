//generate random numbers. Utilizo la biblioteca Chance !
// https://chancejs.com/basics/integer.html

let firstNumber = chance.integer({ min: 0, max: 10 })
let secondNumber = chance.integer({ min: 0, max: 10 })

//get the total
let total = firstNumber + secondNumber;

let firstSpace = document.querySelector("#primary-number");
let secondSpace = document.querySelector("#secondary-number");
let userInput = document.querySelector("#guess").value;
let button = document.querySelector("#btn");
+userInput;

firstSpace.textContent = parseInt(firstNumber);
secondSpace.textContent = parseInt(secondNumber);

function compareNumbers(){
  let mns;
  mns = document.querySelector("#message");

  if(total === userInput){
    mns.textContent = "¡Es correcto!";
  } else {
    mns.textContent = "¡Error!";
  }
}

button.addEventListener("click", compareNumbers);