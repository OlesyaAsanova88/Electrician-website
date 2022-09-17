const mobelMenu = () => {
    const topMenu = document.querySelector('.mobile-menu')

    document.addEventListener('click', (e) => {
        if (e.target.closest('.mob-menu-btn')) {
            topMenu.classList.toggle('open')
        } else if (e.target.closest('.close') || e.target.closest('.overlay') || e.target.closest('.mobel-li')) {
            topMenu.classList.remove('open')
        }
    })

}

export default mobelMenu