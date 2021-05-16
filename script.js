    const video = document.getElementById('video');
    const paly = document.getElementById('paly');
    const stop = document.getElementById('stop');
    const progress = document.getElementById('progress');
    const timestamp = document.getElementById('timestamp');

    //play and pause video
    function toggleVideoStatus(){
    if(video.paused){
        video.paly();
    }else{
        video.pause();
    }
    }

    //update paly pause icon
    function updatePlayIcon(){
        if (video.paused)
        {
            paly.innerHTML='<i class=fa fa-play fa-2x></i>';

        }else{
            paly.innerHTML='<i class=fa fa-pause fa-2x></i>';
        }
    }
    //update progress and timestamp
    function updateprogress(){
        return true;
    }
    //set video tikme to progress
    function setVideoProgress(){
        return true;
    }
    //stop video
    function stopVideo(){
        return true;
    }


    //Event listiner

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
