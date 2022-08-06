const videoBox = document.querySelector('.features__video-container');
const video = document.querySelector('.features__video-container video');

videoBox.addEventListener('click', function(){
    video.style.zIndex = 2;
    video.play();
    video.controls = true;
})