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
       });
       $(".back").click(function(){
           $(".gallery").hide();
           $(".menu").show();
       });
    });


  function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}
function myFunctionOne(imgs) {
    // Get the expanded image
    var expandImg1 = document.getElementById("expandedImg1");
    // Get the image text
    var imgText1 = document.getElementById("imgtext1");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg1.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText1.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg1.parentElement.style.display = "block"; 
}