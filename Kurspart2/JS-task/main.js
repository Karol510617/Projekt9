const button1 = document.querySelector("#btn1");
const button2 = document.querySelector(".btn2");
const color = document.querySelector(".color");
const removeColor = document.querySelector(".remove-color");
const animation = document.querySelector(".power");
function redColor() {
	color.classList.toggle("red");
	// color.classList.remove("blue");
}

function blueColor() {
	color.classList.toggle("blue");
	// color.classList.remove("red");
}

function remove() {
	color.classList.remove("red", "blue", "powers");
}
function animateSquare() {
	color.classList.add("powers");
}

removeColor.addEventListener("click", remove);
button1.addEventListener("click", redColor);
button2.addEventListener("click", blueColor);
animation.addEventListener("click", animateSquare);
