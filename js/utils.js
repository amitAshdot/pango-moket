// const playStopVideo = () => {
//     // console.log('playstop')
//     let video = document.getElementById("video");
//     let iframe = video.parentNode.querySelector("iframe");

//     video.style.zIndex = '10'
//     if (iframe.paused == true) {
//         iframe.playVideo();
//     }
//     else {
//         iframe.pauseVideo();
//     }
// }

//when click on tab add to BODY class 'acc'
const handleFirstTabClick = (e) => {
    if (e.keyCode === 9) {
        if (!document.body.classList.contains('tabbed'))
            document.body.className += ' tabbed';
    }
};

const handleMenuClick = (e) => {
    document.getElementsByClassName('menu-icon-container')[0].classList.toggle('open')
    e.currentTarget.classList.toggle('open')
}
document.addEventListener('DOMContentLoaded', (event) => {
    // document.getElementById("videoPlay").addEventListener("click", () => playStopVideo());
    window.onkeydown = handleFirstTabClick;

    document.getElementsByClassName('menu')[0].onclick = handleMenuClick
});



// tabbed