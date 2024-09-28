let shown = true

function login() {
    const button = document.querySelector('#submitButton')
    const text = document.querySelector("#submitButton h1")
    const spin = document.querySelector("#submitButton div")
    const contentPanel = document.querySelector("#content-panel")
    const formPanel = document.querySelector("#form-panel")
    const imagePanel = document.querySelector("#image-panel")
    const lowerLogo = document.querySelector("#lower-logo")
    const lowerLogoContainer = document.querySelector("#lower-logo-container")
    const midLogo = document.querySelector("#mid-logo")

    // change login text to rotation animation
    toggleVisibility(text, spin)

    const slideDown = document.querySelectorAll(".slide-down")
    const slideLeft = document.querySelectorAll(".slide-left")

    const image = document.querySelector("#image-hider")

    // button bounce
    button.classList.add('scale')
    button.addEventListener('animationend', function() {
        button.classList.remove('scale');
    }, { once: true });

    // slide down form, footer, and new customer prompt
    setTimeout(() => {
        for (let element of slideDown) {
            element.classList.add('hide')
        }
    }, 500)

    // scale down background image and hide
    setTimeout(() => {
        for (let element of slideLeft) {
            element.classList.add('hide')
        }
        image.classList.add('hide-image')
    }, 1000)

    // remove content panel 
    setTimeout(() => {
        formPanel.classList.add('hidden')
        imagePanel.classList.add('hidden')
    }, 2000)

    setTimeout(() => {
        lowerLogo.classList.add('spin-and-center')
        midLogo.classList.add('hidden')
    }, 1400)

    setTimeout(() => {
        lowerLogoContainer.classList.add('scale-down')
    }, 2500)
}

function toggleVisibility(hide, show) {
    hide.classList.add('hidden')
    show.classList.remove('hidden')
}
