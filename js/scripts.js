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
$("#one").click(function(){
    $("#one1").hide();
    $("#house1").show();
});
});