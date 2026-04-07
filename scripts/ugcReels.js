const phones = document.querySelectorAll('.phone');
const viewer = document.getElementById('reelsViewer');
const container = document.getElementById('reelsContainer');
const closeBtn = document.getElementById('closeReels');

/* събира всички видеа */
const videos = [...document.querySelectorAll('.phone video')];

/* създава reels */
function createReels(startIndex) {
    container.innerHTML = "";

    videos.forEach((vid, index) => {
        const reel = document.createElement('div');
        reel.classList.add('reel');

        const video = document.createElement('video');
        video.src = vid.querySelector('source').src;
        video.controls = true;
        video.autoplay = false;

        reel.appendChild(video);
        container.appendChild(reel);
    });

    viewer.classList.add('active');

    setTimeout(() => {
        container.scrollTo({
            top: window.innerHeight * startIndex,
            behavior: "instant"
        });
    }, 50);
}

/* click на карта */
phones.forEach((phone, index) => {
    phone.addEventListener('click', () => {
        createReels(index);
    });
});

/* затваряне */
closeBtn.addEventListener('click', () => {
    viewer.classList.remove('active');
    container.innerHTML = "";
});