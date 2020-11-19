
let count = 0

populateCarosel = () => {
    let caroselImg = imageObj.carosel;
    let carosel = document.querySelector('.home-carosel');

    caroselImg.map((image, index) => {
        let newImage = document.createElement('IMG');
        newImage.className = 'carosel-image';
        newImage.id = index;
        newImage.src = image[0];
        newImage.alt = image[1];
        carosel.appendChild(newImage);
    })

    currentSlide(caroselImg);
}

currentSlide = (caroselImg) => {
document.getElementById(count).className = 'carosel-image current-slide'
let slideShow = setInterval(() => nextSlide(caroselImg), 1000*10)

}

nextSlide = (caroselImg) => {
    count++
    if (count >= caroselImg.length) {
        count = 0
    }  

    let previousImage = document.querySelector('.current-slide');
    document.getElementById(count).className+= ' current-slide';
    if (previousImage) {
        previousImage.classList.remove('current-slide')
    }
}
