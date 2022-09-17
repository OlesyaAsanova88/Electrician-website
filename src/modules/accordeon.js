const accordeon = () => {
    const acc = document.querySelector('.accordeon')
    const accElem = acc.querySelectorAll('.element')


    accElem.forEach(el => {
        el.addEventListener('click', () => {
            if (el.classList.contains('active')) {
                el.classList.remove('active')
                el.childNodes[3].classList.remove('active')
            } else {
                accElem.forEach((child) => {
                    child.classList.remove('active');
                    child.childNodes[3].classList.remove('active');
                })
                el.classList.add('active')
                el.childNodes[3].classList.add('active')
            }
        })
    })
}

export default accordeon 