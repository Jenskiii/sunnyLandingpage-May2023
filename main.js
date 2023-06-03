const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".bubble");
const fadeIn = document.querySelectorAll(".animation");

hamburger.addEventListener("click", toggleMenu);


function toggleMenu() {
    menu.classList.toggle("active")
}

// removes menu when item clicked
document.querySelectorAll(".nav__list--mobile").forEach(e => 
    e.addEventListener("click", () =>{
        menu.classList.remove("active");   
    }) )


// plays animation when scrolling
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("play__animation");
        }else{
            entry.target.classList.remove("play__animation")
        }
    })
})

fadeIn.forEach((el) => observer.observe(el));;