const modal = () => {
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const topMenu = document.querySelector('.mobile-menu')

    document.addEventListener('click', (e) => {
        if (e.target.closest('.callback-btn') || e.target.closest('.button-services') || e.target.closest('.absolute')) {
            modalCallback.style.display = "block"
            modalOverlay.style.display = "block"
            topMenu.classList.remove('open')
        }
        else if (e.target.closest('.modal-close')) {
            modalCallback.style.display = "none"
            modalOverlay.style.display = "none"
        }
        else if (!e.target.closest('.modal-callback')) {
            modalCallback.style.display = "none"
            modalOverlay.style.display = "none"
        }
    })

}
export default modal