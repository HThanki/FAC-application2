const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const pause = document.querySelector('#pause');

let play = false;
let interval = null;

function nextSlide() {
    const current = document.querySelector('.current');
    //remove current class    
    current.classList.remove('current');

    //add current class to the next slide
    if (current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
}

function prevSlide() {
    const current = document.querySelector('.current');
    //remove current class from current element
    current.classList.remove('current');

    //add current class to the next slide
    if (current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length-1].classList.add('current');
    }
}

function keyMove(e) {
    //if right arrow key pressed, move to next slide
    if (e.keyCode == "39") {
        nextSlide();
    }
    //if left arrow key pressed, move to previos slide
    if (e.keyCode == "37") {
        prevSlide();
    }
}

//play/pause slideshow
function slideControl() {
    //if play is true, start slideshow, change play status and change button wording
    if(play) {
        pause.innerHTML = 'Pause Slideshow';
        interval = setInterval(nextSlide, 3000);
        play = false;
    } else {
    //if play is false, stop slideshow, change play status and change button wording
        pause.innerHTML = 'Play Slideshow';
        clearInterval(interval);
        play = true;
    }
}


//Add EventListeners to variables storing DOM elements
window.addEventListener('keydown', keyMove);
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
pause.addEventListener('click', slideControl);

slideControl();