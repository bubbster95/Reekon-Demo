hamburger = () => {
    let hamburger = document.querySelector('.nav-wrapper');
    let topBar = document.getElementById('top');
    let middleBar = document.getElementById('middle');
    let bottomBar = document.getElementById('bottom');

    if (hamburger.className === 'nav-wrapper') {
        hamburger.className = 'nav-wrapper visible';
        topBar.className+= ' tilt';
        middleBar.className+= ' fade';
        bottomBar.className+= ' untilt';
    } else {
        hamburger.className = 'nav-wrapper';
        topBar.classList.remove('tilt');
        middleBar.classList.remove('fade');
        bottomBar.classList.remove('untilt')
    }
}

scrollUpTo = (view) => {
    document.getElementById(view).scrollIntoView();
}