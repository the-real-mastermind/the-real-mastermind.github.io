const debug = false;
if(!debug){
    if (screen.width <= 699 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)){
        window.location = "../mobile.html"
    }
}
