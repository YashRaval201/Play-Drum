var drumNumbers = document.querySelectorAll(".drum").length;

for(var i = 0; i < drumNumbers; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)
    });
}

document.addEventListener("keypress", function(event) {
    // console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "d":            
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();           
            break;
        
        case "f":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();           
            break;

        case "g":            
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();           
            break;

        case "h":            
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();           
            break;

        case "c":            
            var audio = new Audio("sounds/snare.mp3");
            audio.play();           
            break;    

        case "v":            
            var audio = new Audio("sounds/snare.mp3");
            audio.play();           
            break;     

        case "k":            
            var audio = new Audio("sounds/crash.mp3");
            audio.play();           
            break;

        case "b":            
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();           
            break;

        default:
            break;
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
