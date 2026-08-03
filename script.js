const slides = document.querySelectorAll(
    ".slideA, .slideB, .slideC, .slideD"
);

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[index].style.display = "flex";

}

next.addEventListener("click", () => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

});

let startX = 0;
let endX = 0;


document.querySelector(".results_gallery-photos")
.addEventListener("mousedown", (e)=>{

    startX = e.clientX;

});


document.querySelector(".results_gallery-photos")
.addEventListener("mouseup", (e)=>{

    endX = e.clientX;


    if(startX - endX > 50){

        // движение влево = следующий слайд

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }


    if(endX - startX > 50){

        // движение вправо = предыдущий слайд

        currentSlide--;

        if(currentSlide < 0){
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);

    }

});

prev.addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

});


const burgerToggle = document.querySelector("#burger-toggle");
const menuLinks = document.querySelectorAll(".header_nav a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        burgerToggle.checked = false;
    });
});