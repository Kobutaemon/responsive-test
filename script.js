const hambergerIcon = document.querySelector(".fa-bars");
const text = document.querySelector(".text");


hambergerIcon.addEventListener("click", function() {
    text.classList.toggle("active");
})