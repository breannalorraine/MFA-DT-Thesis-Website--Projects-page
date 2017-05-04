window.onresize = function() {
    if (window.innerWidth >= 480) {
        if (document.getElementById('myVid') == null) {
            addContentToWrapper();
        }
        if (document.getElementById('myImg') != null) {
            document.getElementById("myImg").remove();
        }
    }
    else {
        if (document.getElementById('myVid') != null) {
            document.getElementById("myVid").remove();
        }
        if (document.getElementById('myImg') == null) {
            addContentToWrapper();
        }
    }
}
function addSourceToVideo(element, src, type) {
    var newSource = document.createElement('source');
    newSource.src = src;
    newSource.type = type;
    element.appendChild(newSource);
}

function addContentToWrapper() {
    var videoWrapper = document.getElementById('videoWrapper');
    if (window.matchMedia('(min-width: 480px)').matches) {
        var newVideo = document.createElement('video');
        newVideo.id = 'myVid';
        newVideo.autoplay = 'true';
        newVideo.loop = 'true';
        newVideo.setAttribute('muted', 'true');
        newVideo.setAttribute('playsinline', 'playsinline');
        addSourceToVideo(newVideo, "./wp-content/uploads/sites/3/2017/03/SPECTRUM-landing-landscape.mp4", "video/mp4");
        addSourceToVideo(newVideo, "./wp-content/uploads/sites/3/2017/03/SPECTRUM-landing-landscape.webm", "video/webm");
        addSourceToVideo(newVideo, "./wp-content/uploads/sites/3/2017/03/SPECTRUM-landing-landscape.ogv", "video/ogv");
        videoWrapper.appendChild(newVideo);
    } else if(window.matchMedia('screen and (max-width: 479px)').matches){
        var newImg = document.createElement('img');
        newImg.id = 'myImg';
        videoWrapper.appendChild(newImg);
    }
}
window.onload = addContentToWrapper();