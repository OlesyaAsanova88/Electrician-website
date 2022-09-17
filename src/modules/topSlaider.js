const topSlaider = () => {
    const sliderBlock = document.querySelector('.top-slider')
    const slides = document.querySelectorAll('.item')
    const itemDots = document.querySelector('.item-dots')
    const timeIntreval = 3000
    let interval
    let currentSlide = 0

    const newDot = () => {
        slides.forEach(() => {
            const li = document.createElement('li')
            li.classList.add('dot')
            itemDots.appendChild(li)
        })
        itemDots.children[0].classList.add('dot-active')
    }
    newDot()

    const dots = document.querySelectorAll('.dot')

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        nextSlide(slides, currentSlide, 'item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    const stoptSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.matches('.dot, .item-btn')) {
            return
        }

        prevSlide(slides, currentSlide, 'item-active')
        prevSlide(dots, currentSlide, 'dot-active')

        if (e.target.matches('#arrow-right')) {
            currentSlide++
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, 'item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .item-btn')) {
            stoptSlide()
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .item-btn')) {
            startSlide(timeIntreval)
        }
    }, true)

    startSlide(timeIntreval)

}

export default topSlaider