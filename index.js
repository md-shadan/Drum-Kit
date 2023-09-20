
var noofdrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < noofdrum ; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",btn_hander);
    
}
function btn_hander(){
    var key = this.innerHTML;
    makesound(key);
    btn_animation(key);
    
}
document.addEventListener("keypress",function (event) {
    makesound(event.key);
    btn_animation(event.key);
});
function makesound(key){
    switch (key) {
        case "w":
            var audio =new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio =new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio =new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio =new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio =new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio =new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio =new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    
        default:
            break;
    }
}

function btn_animation(current_key) {
    var btn_cls = document.querySelector("."+current_key);
    btn_cls.classList.add("pressed");

    setTimeout(function() {
        btn_cls.classList.remove("pressed");
    } , 200);
}


