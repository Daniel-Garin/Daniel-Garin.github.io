var modal = document.getElementById("myModal");

// Get all modals by order
let modals = document.getElementsByClassName("modal");

// Get the button that opens each modal add to the array in order of appearance
var btn_cyberserker = document.getElementsByClassName("cyberserker-modal-button");
var btn_guilt = document.getElementsByClassName("guilt-modal-button");
var btn_privacy = document.getElementsByClassName("privacy-modal-button");
var btn_aqua = document.getElementsByClassName("aqua-modal-button");

// Button should be added in the order of appeareance in the page
let buttons = [btn_cyberserker, btn_guilt, btn_privacy, btn_aqua];  


// Get the <span> element that closes the modal
var closeButtons = document.getElementsByClassName("close");


// When the user clicks on the button, open the needed modal
buttons.forEach( ( button, index ) =>
{
  for (var j = 0; j < button.length; j++) {
    button[j].onclick = function() {
      modals[index].style.display = "block";
      }
    }
});


// When the user clicks on <span> (x), close the modal
for(var i = 0; i < closeButtons.length; i++)
{
  closeButtons[i].onclick = function() {
    for (var j = 0; j < modals.length; j++) {
      modals[j].style.display = "none";
    };
  }
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    for (var j = 0; j < modals.length; j++) {
      if (event.target == modals[j]) {
      modals[j].style.display = "none";
    };
  }
}


// Slideshow inside the modal
let slideIndex = [];
let slideNumber = 4;
let slideId = [];
let dotsId = [];

InitSlideIds();
/* showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2); */

//Initializes the slides
function InitSlideIds() {
  slideNumber = modals.length -1;
  console.log(slideNumber);
  for(let i = 0; i < slideNumber; i++) 
  {
    let id = i + 1;
    slideIndex.push(1);
    slideId.push("mySlides".concat(id.toString()));
    //console.log(slideId);
    dotsId.push("slideDots".concat(id.toString()));

    //Sets the first slide as the one that will be shown for each modal
    showSlides(1, i);
  }
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

//The first parameter is the number of the slide and the second that of the slideshow (modal)
function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName(dotsId[no]);

  //The ifs make sure that once you you reach the last/first slide, 
  //clicking the arrow sends you to the first/last slide (respectively)
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  //Displays the current slide
  x[slideIndex[no]-1].style.display = "flex";  

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex[no]-1].className += " active";
}


var modelImages = document.getElementsByClassName("img-modal")

for (var i = 0; i < modelImages.length; i++) {
  modelImages[i].addEventListener("click", function(event) {
    var target = event.target;
    if(target.className.includes("active")) {
      target.className = target.className.replace(" active", "");
      
    }
    else {
      target.className += " active";
    }
  })
}; 