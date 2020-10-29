/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function currentWord1() {
    var x = document.getElementById("word1");
    var y = document.getElementById("word2");
    var z = document.getElementById("word3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
    y.style.display = 'none';
    z.style.display = 'none';
}

function currentWord2() {
    var x = document.getElementById("word2");
    var y = document.getElementById("word1");
    var z = document.getElementById("word3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
    y.style.display = 'none';
    z.style.display = 'none';
}

function currentWord3() {
    var x = document.getElementById("word3");
    var y = document.getElementById("word1");
    var z = document.getElementById("word2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
    y.style.display = 'none';
    z.style.display = 'none';
}

function end() {
    document.getElementById("just-kill-it").classList.add('end-text');
}
// function end() {
//     document.body.classList.add("shake");
//     setTimeout(document.body.classList.remove("shake"), 3000);
//     setTimeout(document.body.classList.add("shake"), 3000);
// }