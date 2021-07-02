// ! 💻 Remember when working in the browser, be sure to save the changes in this file, and refresh the browser window to run the code again.

// ! 👨‍🏫 Read the readme carefully, and practice using "window.prompt()" to gather user input

// * Write your code below!

// i think i added the bmi on?

let whatGame = true;

while (whatGame) {
  const whatGame = window.prompt(
    "Would you like to use the calcularor or BMI?"
  );

  if (whatGame === "calculator") {
    let calculate = true;

    while (calculate) {
      const firstNumber = parseFloat(
        window.prompt("Please enter your first number here")
      );
      const secondNumber = parseFloat(
        window.prompt("Please enter your second number here")
      );
      const operator = window.prompt(
        "Add + Subtract - Divide / Multiply * Power ^ or Square Root &"
      );

      if (operator === "+") {
        window.alert(firstNumber + secondNumber);
      }

      if (operator === "-") {
        window.alert(firstNumber - secondNumber);
      }

      if (operator === "/") {
        window.alert(firstNumber / secondNumber);
      }

      if (operator === "*") {
        window.alert(firstNumber * secondNumber);
      }

      if (operator === "^") {
        window.alert(Math.pow(firstNumber, secondNumber));
      }

      if (operator === "&") {
        window.alert(
          Math.sqrt(firstNumber * firstNumber + secondNumber * secondNumber)
        );
      }

      calculate = window.confirm("Well Done! Would you like to play again?");
    }

    console.log("Thanks for playing!");
  } else if (whatGame === "BMI") {
    let bmi = true;

    while (bmi) {
      const whichStyle = window.prompt(
        "Would you like to use imperial or metric to calculate your BMI?"
      );
      const weight = parseFloat(
        window.prompt(
          "What is your weight in chosen style (Pounds or Kilograms))?"
        )
      );
      const height = parseFloat(
        window.prompt("What is your height in chosen style (Inches or Meters)?")
      );

      if (whichStyle === "imperial") {
        window.alert((weight / (height * height)) * 703);
      }

      if (whichStyle === "metric") {
        window.alert(weight / (height * height));
      }

      bmi = window.confirm("Would you like to find out someone elses?");
    }

    console.log("Thank you!");
  }

  whatGame = window.confirm("Is this the end?");
}

console.log("Bye");
