const hamburger = document.getElementById("hamburger");
const closeBurger = document.getElementById("close-burger");
const navBar = document.getElementById("nav-bar");
const header = document.getElementById("header");
hamburger.addEventListener("click", () => {
	navBar.classList.toggle("show");
	if (navBar.classList.contains("show")){
		hamburger.style.display = "none";
		closeBurger.style.display = "block";
		header.style.display = "none";
		
	}
}
);
closeBurger.addEventListener("click", () => {
navBar.classList.remove("show");
hamburger.style.display = "block";
closeBurger.style.display = "none";
header.style.display = "block";



});