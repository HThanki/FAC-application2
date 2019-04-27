const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const auto = false;
const intervalTime = 8000;
// let slideInterval;

function nextSlide() {
    const current = document.querySelector('.current');
    //remove current class    
    current.classList.remove('current');
    if (current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }

    // setTimeout(() => current.classList.remove('current'));
}


function prevSlide() {
    const current = document.querySelector('.current');

    //remove current class
    current.classList.remove('current');

    if (current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length-1].classList.add('current');
    }

    // setTimeout(() => current.classList.remove('current'));
}

function keyMove(e) {
    if (e.keyCode == "39") {
        nextSlide();
    }
    if (e.keyCode == "37") {
        prevSlide();
    }
}

if(auto) {
    setInterval(nextSlide, intervalTime );
}

//play/pause button function



window.addEventListener('keydown', keyMove);

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
