$(document).ready(function(){
    $("#house1").mouseover(function(){
        $("#para1").show();
     });
    $("#house1").mouseleave(function(){
        $("#para1").hide();
    });

    $("#house2").mouseover(function(){
        $("#para2").show();
     });
    $("#house2").mouseleave(function(){
        $("#para2").hide();
    });
    $("#house3").mouseover(function(){
        $("#para3").show();
     });
    $("#house3").mouseleave(function(){
        $("#para3").hide();
    });
    $("#house4").mouseover(function(){
        $("#para4").show();
     });
    $("#house4").mouseleave(function(){
        $("#para4").hide();
    });
    
    $("#house1").click(function(){
        $("#one").show();
        $("#house1").hide();
         $("#house2").hide();
         $("#house3").hide();
          $("#house4").hide();
         $("#two").hide();
         $("#three").hide();
          $("#four").hide();
          
    });
    $("#house2").click(function(){
        $("#two").show();
        $("#house1").hide();
        $("#house2").hide();
         $("#house3").hide();
         $("#house4").hide();
         $("#three").hide();
          $("#four").hide();
         $("#five").hide();
         $("#one").hide();
    });
    
    $("#house3").click(function(){
        $("#three").show();
        $("#one").hide();
         $("#two").hide();
          $("#four").hide();
         $("#house1").hide();
        $("#house2").hide();
         $("#house3").hide();
         $("#house4").hide();
   
    });
    $("#house4").click(function(){
        $("#four").show();
        $("#one").hide();
         $("#two").hide();
          $("#three").hide();
         $("#house1").hide();
        $("#house2").hide();
         $("#house3").hide();
         $("#house4").hide();
   
    });
    // $("#house4").click(function(){
    //     $("#one").hide();
    //     $("#two").hide();
    //      $("#three").hide();
    //     $("#five").hide();
    //     $("#four").show();
    // });

    // $("#house5").click(function(){
    //     $("#one").hide();
    //     $("#two").hide();
    //      $("#three").hide();
    //     $("#four").hide();
    //     $("#five").show();
    // });
    // // $("#house1").click(function(){
    // //  $("#house2").hide();
     
    // // });

    // // $("#house2").click(function(){
    // //     $("#house1").hide();
    // //    });

    // //    $(".back").click(function(){
    // //        $(".gallery").hide();
    // //        $(".menu").show();
    // //    });
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
function myFunctionTwo(imgs) {
    // Get the expanded image
    var expandImg2 = document.getElementById("expandedImg2");
    // Get the image text
    var imgText2 = document.getElementById("imgtext2");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg2.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText2.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg2.parentElement.style.display = "block"; 
}
function myFunctionThree(imgs) {
    // Get the expanded image
    var expandImg3 = document.getElementById("expandedImg3");
    // Get the image text
    var imgText3 = document.getElementById("imgtext3");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg3.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText3.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg3.parentElement.style.display = "block"; 
}
function myFunctionFour(imgs) {
    // Get the expanded image
    var expandImg4 = document.getElementById("expandedImg4");
    // Get the image text
    var imgText4 = document.getElementById("imgtext4");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg4.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText4.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg4.parentElement.style.display = "block"; 
}