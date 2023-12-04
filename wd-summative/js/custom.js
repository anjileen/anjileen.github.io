if (document.getElementById("menu-icon")) {
	document.getElementById("menu-icon").addEventListener("click", navToggle);
}

function navToggle() {
	var navi = document.querySelector(".navbar-collapse");
	if (navi.style.display === "block") {
		navi.style.display = "none";
	} else {
		navi.style.display = "block";
	}  
  
	var clickedlinks = document.querySelectorAll('.nav-link');
  
	clickedlinks.forEach(link => {
		link.addEventListener("click", event => {
		navi.style.display = "none";
	})});
}

document.getElementById("submit-button").addEventListener("click", function() {
    
    if(document.getElementById("name").value == "" || document.getElementById("email").value == "" || document.getElementById("message").value == "") {

        if(document.getElementById("name").value == "") {
            document.getElementById("confirmation").innerText = "Please fill out your name";
            document.getElementById("confirmation").style.display = "block";
            document.getElementById("confirmation").style.color = "red";
            document.getElementById("confirmation").style.borderColor= "red";
        }
        else if(document.getElementById("email").value == "") {
            document.getElementById("confirmation").innerText = "Please fill out your email";
            document.getElementById("confirmation").style.display = "block";
            document.getElementById("confirmation").style.color = "red";
            document.getElementById("confirmation").style.borderColor= "red";
        }
        else if(document.getElementById("message").value == ""){
            document.getElementById("confirmation").innerText = "Please write a message";
            document.getElementById("confirmation").style.display = "block";
            document.getElementById("confirmation").style.color = "red";
            document.getElementById("confirmation").style.borderColor= "red";
        }
    }
    else {
        document.getElementById("confirmation").innerText = "Thank you, your message has been sent."
        document.getElementById("confirmation").style.color = "black";
        document.getElementById("confirmation").style.borderColor= "green";
        document.getElementById("confirmation").style.display = "block";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }

});


var sections = document.querySelectorAll(".section");
var navigationLinks = document.querySelectorAll(".secLink");

var currentSection = "home";
window.addEventListener("scroll", () => {

	sections.forEach(sectionEl => {
		if (window.scrollY > (sectionEl.offsetTop - 170)) {
			currentSection = sectionEl.id;
		}
	});
	
	navigationLinks.forEach(navig => {
		navig.classList.remove("active");
	});
	
	navigationLinks.forEach(navEl => {

		if (navEl.href.includes(currentSection)) {
			if (currentSection == "openinghours") {
				navEl.classList.add("active");
				document.querySelector("#loc").classList.add("active");
			} else {
				navEl.classList.add("active");
			}
		}
	});
});