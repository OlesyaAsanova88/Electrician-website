const scrollUp = () => {
    const scrollBtn = document.querySelector('.show-btn')

    window.onscroll = () => {
        if (window.scrollY > 700) {
            scrollBtn.classList.remove('show-btn-hide')
        } else if ((window.scrollY < 700)) {
            scrollBtn.classList.add('show-btn-hide')
        }
    }

    scrollBtn.onclick = () => {
        window.scrollTo(0, 0)
    }

}

export default scrollUp