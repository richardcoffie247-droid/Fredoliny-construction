const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

function sendWhatsApp(){

    let name = document.getElementById("name").value;

    let phone = document.getElementById("phone").value;

    let email = document.getElementById("email").value;

    let service = document.getElementById("service").value;

    let details = document.getElementById("details").value;


    let message =
    "Hello Fredoliny Construction Limited,%0A%0A" +
    "Name: " + name + "%0A" +
    "Phone: " + phone + "%0A" +
    "Email: " + email + "%0A" +
    "Service: " + service + "%0A" +
    "Project Details: " + details;


    window.open(
    "https://wa.me/233201849753?text=" + message,
    "_blank"
    );

}