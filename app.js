
function slidesPlugin (activeSlide) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active')
    
    slides.forEach((slide) =>{
        slide.addEventListener('click', ()=>{
            clearActiveClasses();
            slide.classList.add('active');
            player.loadVideoById({'videoId': slide.dataset.videoId,
                   'startSeconds': startSeconds,
                   'endSeconds': endSeconds,});
        });
    });
    function clearActiveClasses(){
        slides.forEach((slide) => slide.classList.remove('active')
        )
    }
}

slidesPlugin (2)
