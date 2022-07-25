'use strict'

window.onload = function() {
    const pictures = document.getElementsByClassName('picture');
    
    function showPicture(eventObj) {
        let pic = eventObj.target;

        pic.style.filter = 'blur(0)';
        pic.style.transition = 'filter 1s';

        setTimeout(hidePicture, 5000, pic);
    }
    function hidePicture(pic) {
        pic.style.filter = 'blur(20px)';
        pic.style.transition = 'filter 1s';
    }
    
    for(let i=0; i<pictures.length; i++) {
        pictures[i].onclick = showPicture;
    }
}