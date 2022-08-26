/* Author: 

*/
const slides = document.getElementsByClassName("slide");
const prev = document.querySelector(".prev");
const nxt = document.querySelector(".next")
const buttons = document.querySelectorAll(".btn");
let prevIndex = 0;
let currentIndex = 0;
buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentIndex = index;
    });
});

$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        arrows: true
    });
})