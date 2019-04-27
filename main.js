const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const pause = document.querySelector('#pause');

let paused = false;
const intervalTime = 1000;
pause.innerHTML = 'Pause Slideshow';

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
    if (e.keyCode == "39") {
        nextSlide();
    }
    if (e.keyCode == "37") {
        prevSlide();
    }
}

//play/pause slideshow
function slideControl() {
    //if paused, start slideshow, change paused status and change button wording
    if(paused) {
        setInterval(nextSlide, intervalTime);
        paused = false;
        pause.innerHTML = 'Pause Slideshow';
    } else {
    //if not paused, stop slideshow, change paused status and change button wording
        paused = true;
        pause.innerHTML = 'Play Slideshow';        
    }
}

//Add EventListeners to variables storing DOM elements/hook up functions above to the DOM elements

window.addEventListener('keydown', keyMove);
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
pause.addEventListener('click', slideControl);

// slideControl();