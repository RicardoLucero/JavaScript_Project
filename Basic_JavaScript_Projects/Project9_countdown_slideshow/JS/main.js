function countdown() {//creating the countdown function
    var seconds = document.getElementById("seconds").value;//grabbing the seconds element from the html file

    function tick() {//the actual function to count down is done here
        seconds = seconds - 1;// what ever the seconds are at they are subtracted by 1
        timer.innerHTML = seconds;//placing the seconds in the P element
        var time = setTimeout(tick, 1000);//set the timer and make it pause in between for 1 second 
        if (seconds == -1) {//-1 is when the timer is set to stop
            alert("Time's up!");
            clearTimeout(time);//clears a timer set with the setTimeout
            timer.innerHTML = "";
        }
    }
    tick();
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}