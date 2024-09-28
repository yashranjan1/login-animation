let shown = true

function login() {
    // form elements
    const button = document.querySelector('#submitButton')
    const text = document.querySelector("#submitButton h1")
    const spin = document.querySelector("#submitButton div")
    const onlineId = document.getElementById('onlineIdField');
    const password = document.getElementById('passwordField');

    // panels 
    const formPanel = document.querySelector("#form-panel")
    const imagePanel = document.querySelector("#image-panel")

    // logo/logo containers
    const lowerLogo = document.querySelector("#lower-logo")
    const lowerLogoContainer = document.querySelector("#lower-logo-container")
    const midLogo = document.querySelector("#mid-logo")
    const upperLogoContainer = document.querySelector("#upper-logo-container")
    const upperLayer = document.querySelector("#upper-layer")

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
        image.classList.remove('hide-image')
    }, 2000)

    setTimeout(() => {
        lowerLogo.classList.add('spin-and-center')
        midLogo.classList.add('hidden')
    }, 1400)

    setTimeout(() => {
        lowerLogoContainer.classList.add('scale-down')
    }, 2500)

    setTimeout(() => {
        imagePanel.classList.remove('hidden')
        image.classList.add('show-image')
    }, 3500)
    setTimeout(() => {
        upperLayer.classList.remove('hidden')
        upperLayer.classList.add('flex')
        upperLogoContainer.classList.add('show')
    }, 4500)
    setTimeout(() => {
        imagePanel.style.transition = 'all 1s linear';
        imagePanel.classList.add('shift')
        imagePanel.addEventListener('transitionend', () => {
            imagePanel.style.transition = '';
        }, { once: true });
        upperLogoContainer.classList.add('spin-and-top-left')
        upperLogoContainer.addEventListener('transitionend', () => {
            upperLayer.classList.add('hidden');
            upperLayer.classList.remove('flex')
            midLogo.classList.remove('hidden')
        }, { once: true });
    }, 5200)
    setTimeout(() => {
        formPanel.classList.remove('hidden')
        imagePanel.classList.remove('shift')
        toggleVisibility(spin, text)
        onlineId.value = ""
        password.value = ""
        isValid()
        lowerLogo.classList.remove('spin-and-center')
        image.classList.remove('show-image')
        upperLogoContainer.classList.remove('show')
        upperLogoContainer.classList.remove('spin-and-top-left')
        lowerLogoContainer.classList.add('hidden')
        lowerLogoContainer.classList.remove('scale-down')
    }, 6250)

    // slide down form, footer, and new customer prompt
    setTimeout(() => {
        for (let element of slideDown) {
            element.classList.remove('hide')
        }
    }, 6500)

    // scale down background image and hide
    setTimeout(() => {
        for (let element of slideLeft) {
            element.classList.remove('hide')
            imagePanel.classList.remove('shift')
        }
        lowerLogoContainer.classList.remove('hidden')
    }, 7000)
}

function toggleVisibility(hide, show) {
    hide.classList.add('hidden')
    show.classList.remove('hidden')
}
