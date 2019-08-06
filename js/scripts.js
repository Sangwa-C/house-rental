$(document).ready(function(){
    $("#house1").mouseover(function(){
        $("#para1").show();
     });
    $("#house1").mouseleave(function(){
        $("#para1").hide();
    });
    
    $("#house1").click(function(){
        $("#house1").hide();
        $("#one").show();
    });
    // $("#one").click(function(){
    //     $("#one").hide();
    //     $("#house1").show();
    // });
    $("#house2").mouseover(function(){
        $("#para2").show();
     });
    $("#house2").mouseleave(function(){
        $("#para2").hide();
    });
    
    $("#house2").click(function(){
        $("#house2").hide();
        $("#two").show();
    });
    $("#house1").click(function(){
     $("#house2").hide();
    });
    $("#house2").click(function(){
        $("#house1").hide();
       })
    
    });
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
      var dots = document.getElementsByClassName("demo");
      var captionText = document.getElementById("caption");
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
      captionText.innerHTML = dots[slideIndex-1].alt;
    }