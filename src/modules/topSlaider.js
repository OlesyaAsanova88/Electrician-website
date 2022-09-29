const topSlaider = () => {

    const slides = document.querySelectorAll('.item')
    const slidesText = document.querySelectorAll('.table');
    let currentSlide = 0;
    let currentSlideText = 0;

    function nextSlide() {
        slides[currentSlide].className = 'item';
        slidesText[currentSlideText].className = 'table';

        currentSlide = (currentSlide + 1) % slides.length;
        currentSlideText = (currentSlideText + 1) % slidesText.length;

        slides[currentSlide].className = 'activeslide';
        slidesText[currentSlideText].className = 'active';
    }
    setInterval(nextSlide, 3000);
    nextSlide()
}

export default topSlaider