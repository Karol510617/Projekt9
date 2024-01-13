// const Arrow = document.querySelector(".fas");
// const Btn = document.querySelector(".arrow");
// const HiddenImage = document.querySelector(".item1");
// function showimage() {
// 	HiddenImage.classList.toggle("show");

// 	if (HiddenImage.classList.contains("show")) {
// 		// Arrow.style.rotate = "180deg";
// 		Arrow.style.transform = "rotate(180deg)";
// 		console.log("Ok");
// 	} else {
// 		// Arrow.style.rotate = "0deg";
// 		Arrow.style.transform = "rotate(0deg)";
// 		console.log("nie ok");
// 	}
// }
// Btn.addEventListener("click", showimage);

// const Clicker = document.querySelector(".file");
// function showsomething() {
// 	Clicker.classList.add("buton");
// }
// Clicker.addEventListener("click", showsomething);
const sizeUp = document.querySelector(".size-up");
const sizeDown = document.querySelector(".size-down");
const color = document.querySelector(".color");
const p = document.querySelector("p");
let fontSize = 20;
function bigText() {
	fontSize += 5;
	p.style.fontSize = fontSize + "px";
}
function smallText() {
	fontSize -= 5;
	p.style.fontSize = fontSize + "px";
}
function changeColor() {
	p.style.color = "red";
}
sizeUp.addEventListener("click", bigText);
sizeDown.addEventListener("click", smallText);
color.addEventListener("click", changeColor);
