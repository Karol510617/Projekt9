document.addEventListener("DOMContentLoaded", function () {
	const AllNavItems = document.querySelectorAll(".nav-link");
	const nav = document.querySelector(".navbar");
	const NavList = document.querySelector(".navbar-collapse");
	function addshadow() {
		if (window.scrollY >= 250) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}

	AllNavItems.forEach((item) =>
		item.addEventListener("click", () => NavList.classList.remove("show"))
	);
	window.addEventListener("scroll", addshadow);
});
