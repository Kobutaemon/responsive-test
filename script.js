const hambergerIcon = document.querySelector(".fa-bars");
const hambergerActive = document.getElementById("hamberger");

hambergerIcon.addEventListener("click", function() {
  hambergerActive.classList.toggle("active");
})