window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let windowposition = window.scrollY > 0; 
    navbar.classList.toggle("scrolling-active", windowposition);
});

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	orientation: 'right'
});
