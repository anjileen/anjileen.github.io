const mobMenu = document.querySelector("#mobMenu");
const closeBtn = document.querySelector("#closeBtn");

mobMenu.addEventListener("click", function() {
	openNav();
})

closeBtn.addEventListener("click", function() {
	closeNav();
})

function openNav() {
  document.getElementById("mobNavLinks").style.width = "70%";
  document.getElementById("mobNavLinks").style.borderLeft = "6px solid #ccc";
}

function closeNav() {
  document.getElementById("mobNavLinks").style.width = "0";
  document.getElementById("mobNavLinks").style.borderLeft = "0px solid";
}



let btt = document.getElementById("backToTop");
btt.addEventListener("click", backToTop);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		btt.style.display = "block";
	} else {
		btt.style.display = "none";
	}
}

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
