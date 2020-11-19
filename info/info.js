infoEvents = () => {
    let scrollHeight = window.scrollY;
    let infoBoxes = document.getElementsByClassName('info-box');

    let offsetHeight = []
    for (let i = 0; i < infoBoxes.length; i++) {
        offsetHeight.push(infoBoxes[i].offsetTop + (window.innerHeight * .5))
        if (offsetHeight[i] <= scrollHeight) {
            infoBoxes[i].className = 'info-box show-box'
        } else {
            infoBoxes[i].classList.remove('show-box')
        }
    }

}