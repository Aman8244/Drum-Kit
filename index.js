var num = document.querySelectorAll(".drum").length;
var aud,thisHtml;


function buttonAnime(currentKey){
    currentKey="."+currentKey;
    var anime = document.querySelector(currentKey);
    anime.classList.add("press");
    setTimeout(function(){
        anime.classList.remove("press");
    },100);
}

for(var i=0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

  
    thisHtml = this.innerHTML;
    makeSound(thisHtml);
    buttonAnime(thisHtml);
    
})

}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnime(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            
                aud = new Audio("tom-1.mp3");
                aud.play();
                this.style.color="white";
            
            break;
        case "a":
           
                aud = new Audio("tom-2.mp3");
                aud.play();
                this.style.color="white";
         
            break;
        case "s":
            
                aud = new Audio("tom-3.mp3");
                aud.play();
                this.style.color="white";
            
            break;
        case "d":
            
                aud = new Audio("tom-4.mp3");
                aud.play();
                this.style.color="white";
            
            break;
        case "j":
            
                aud = new Audio("crash.mp3");
                aud.play();
                this.style.color="white";
            
            break;
        case "k":
            
                aud = new Audio("kick-bass.mp3");
                aud.play();
                this.style.color="white";
            
            break;
        default:
            
                aud = new Audio("snare.mp3");
                aud.play();
                this.style.color="white";
            
            break;
    }

}

