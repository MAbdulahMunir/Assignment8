// Program 1.
let name = "Umair Azmat";
let admin = "Umair Azmat";
alert(admin);

// Program 2.
let planetEarth = "Earth";

// Program 3.
let currentUser = prompt("Enter your name.");

// Program 4.
let favDrink = "Sprite";

// Program 5.
let favNum = 9;

/* 6.	Create a function block called myFavs that console logs your answers, don't forget to invoke the myFavs function.*/

function myFavs() {
  console.log(favDrink);
  console.log(favNum);
}

myFavs();

// 7.	Create an object called person, with name set to Umair and Umair set to 20.

const person = {
  name1: Umair,
  age: 20,
};

/* 8.	write a JS program, define two variables and sum those two variable and save result in third variable and print in console?*/

let firstName = `M.Abdullah`;
let lastName = `Munir`;
let fullName = firstName + lastName;
console.log(fullName);

/* 9.	write a JS program, that can divide two numbers and show the result in console? console.log("result of firstProgram", a);*/

let num1 = 10;
let num2 = 2;
let a = num1 / num2;
console.log(`result of firstProgram`, a);

/*10.	write a JS program, that can add two number, divide result by 5 and show in console?console.log("result of firstProgram", a);*/

let n1 = 10;
let n2 = 2;
let b = n1 + n2 / 5;
console.log(`result of firstProgram`, b);

/* 11. write a JS program, that can convert temp from F into C and show into console, using C = (F − 32) * 5/9. use if F = 50, what will be the value of C? console.log("Divide two number", a); */

let f = Number.parseInt(prompt(`Give the value of F`));
let c = ((f - 32) * 5) / 9;
console.log(`Value of C is `, c);

/* 12.	Write a JavaScript program to find the sum of two numbers obtained from prompt and display the result using alert.*/

let firstA = Number.parseInt(prompt(`Give 1st number`));
let firstB = Number.parseInt(prompt(`Give 2nd number`));
let firstC = firstA + firstB;
alert(firstC);

/*13.	Write a JavaScript program to find the difference of two numbers obtained from prompt and display the result using console.log.*/

let difA = Number.parseInt(prompt(`Give 1st number`));
let difB = Number.parseInt(prompt(`Give 2nd number`));
let ditC = difA - difB;
console.log(ditC);

/*14.	Write a JavaScript program to find the product of two numbers obtained from prompt and display the result using alert.*/

let proA = Number.parseInt(prompt(`Give 1st number to get product.`));
let proB = Number.parseInt(prompt(`Give 2nd number to get product.`));
let proC = proA * proB;
alert(proC);

/*15.	Write a JavaScript program to find the quotient of two numbers obtained from prompt and display the result using console.log.*/

let quotA = Number.parseInt(prompt(`Give 1st number to get quotient.`));
let quotB = Number.parseInt(prompt(`Give 2nd number to get quotient.`));
let quotC = quotA / quotB;
console.log(quotC);

// 16.	Write a JavaScript program to find the remainder of two numbers obtained from prompt using the modulus operator and display the result using alert.

let moduA = Number.parseInt(prompt(`Give 1st number to get remainder.`));
let moduB = Number.parseInt(prompt(`Give 2nd number to get remainder.`));
let moduC = moduA % moduB;
alert(moduC);
