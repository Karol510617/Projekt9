const FavColor = "red";
const meal = "schabowy";
const FavDrink1 = "pepsi";
const function1 = "123";
const MyName = "Karol";
const age = 31;
console.log(`Cześć, jestem ${MyName} i mam ${age}`);

const x = 1;
const y = 2;
const z = 3;

if (x <= y) {
	console.log(`tak`);
} else {
	console.log(`nie`);
}

const Score = 15 % 2;

console.log(`${Score}`);

let num1 = 8;
num1++;
num1++;
console.log(num1);

let X = 5;
let Y = 10;

console.log(`${(X /= Y)}`);
console.log(`${(X *= Y)}`);
console.log(`${Y % X}`);

const passLEnght = 4;

if (passLEnght >= 12) {
	console.log(`Masz dobre hasło`);
} else if (passLEnght >= 5 && passLEnght <= 11) {
	console.log(`Masz takie se hasło`);
} else if (passLEnght <= 4) {
	console.log(`masz do dupy hasło`);
}

for (let i = 1; i <= 5; i++) {
	console.log(i);
}

function divide(x, y) {
	console.log(x * y);
}

divide(2, 4);

function Showsomething(name, surname, year) {
	console.log(`My name is ${name},${surname}. Mamy ${year}`);
}
Showsomething("Esteban", "Krok", 2021);

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}
function add(x, y, z) {
	console.log(x + y * z);
}
add(1, 2, 3);

if (numbers.length > 5) {
	console.log(`true`);
} else {
	console.log(`false`);
}
console.log(`Tablica z cyframi ma ${numbers.length} elementów`);

const divclass = document.querySelectorAll("div");
console.log(divclass);

const button1 = document.querySelector("#btn1");
const button2 = document.querySelector(".btn2");

function mouseclick() {
	console.log("Klik");
}
function addnumbers() {
	console.log(2 + 2);
}
button1.addEventListener("click", mouseclick);

button2.addEventListener("click", addnumbers);
