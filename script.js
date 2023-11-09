const hambergerIcon = document.querySelector(".fa-bars");
const hambergerActive = document.querySelector(".hamberger");

hambergerIcon.addEventListener("click", function() {
    hambergerActive.classList.toggle("active");
})