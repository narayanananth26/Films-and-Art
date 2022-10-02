function popupToggle() {
	const popup = document.querySelector(".newsletter-popup");
	popup.classList.toggle("hidden");
}

setTimeout(popupToggle, 3000);

let loadCount = 1;

const load = document.querySelector(".btn-load-more");

load.addEventListener("click", function () {
	loadCount++;
	console.log(loadCount);
});

function loadMore() {
	const col1 = document.querySelector(".--1");
	const col2 = document.querySelector(".--2");
	const col3 = document.querySelector(".--3");

	const html1 = `<div class="gallery-img">
                    <img src="img/gallery/gallery-img-${
						19 + loadCount * 3
					}.jpg" />
                </div>
                <div class="gallery-img">
                    <img src="img/gallery/gallery-img-${
						19 + loadCount * 6
					}.jpg" />
                </div>
                <div class="gallery-img">
                  <img src="img/gallery/gallery-img-${
						19 + loadCount * 9
					}.jpg" />
                </div>`;
	const html2 = `<div class="gallery-img">
                    <img src="img/gallery/gallery-img-${
						20 + loadCount * 3
					}.jpg" />
                </div>
                <div class="gallery-img">
                    <img src="img/gallery/gallery-img-${
						20 + loadCount * 6
					}.jpg" />
                </div>
                <div class="gallery-img">
                  <img src="img/gallery/gallery-img-${
						20 + loadCount * 9
					}.jpg" />
                </div>`;
	const html3 = `<div class="gallery-img">
                    <img src="img/gallery/gallery-img-${
						21 + loadCount * 3
					}.jpg" />
                </div>
                <div class="gallery-img">
                    <img src="img/gallery/gallery-img-${
						21 + loadCount * 6
					}.jpg" />
                </div>
                <div class="gallery-img">
                  <img src="img/gallery/gallery-img-${
						21 + loadCount * 9
					}.jpg" />
                </div>`;
	col1.insertAdjacentHTML("beforeend", html1);
	col2.insertAdjacentHTML("beforeend", html2);
	col3.insertAdjacentHTML("beforeend", html3);

	if (loadCount > 5) {
		load.classList.toggle("hidden");
		console.log("hidden");
	}
}

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
// 	link.addEventListener("click", function (e) {
// 		e.preventDefault();
// 		const href = link.getAttribute("href");

// 		// Scroll back to top
// 		if (href === "#")
// 			window.scrollTo({
// 				top: 0,
// 				behavior: "smooth",
// 			});

// 		// Scroll to other links
// 		if (href !== "#" && href.startsWith("#")) {
// 			const sectionEl = document.querySelector(href);
// 			sectionEl.scrollIntoView({ behavior: "smooth" });
// 		}

// 		// Close mobile naviagtion
// 		if (link.classList.contains("main-nav-link"))
// 			headerEl.classList.toggle("nav-open");
// 	});
// });

// ///////////////////////////////////////////////////////////
// // Sticky navigation

const sectionCollageEl = document.querySelector(".section-collage");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		// console.log(ent);

		if (ent.isIntersecting === false) {
			document.body.classList.add("sticky");
		}

		if (ent.isIntersecting === true) {
			document.body.classList.remove("sticky");
		}
	},
	{
		// In the viewport
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);
obs.observe(sectionCollageEl);

// ///////////////////////////////////////////////////////////
// // Search Bar

// const searchIcon = document.querySelector(".search-icon-container");
// const searchBox = document.querySelector(".search-bar");

// searchIcon.onclick = function () {
// 	searchBar.classList.toggle("active")
// }
