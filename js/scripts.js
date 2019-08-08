function menuOpen() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function menuClose() {
  document.getElementById("mySidepanel").style.width = "0";
}


$(document).ready(function(){
  $("#send").click(function(){
    var name=$("input#name").val();
    var email=$("input#email").val();
    var subject=$("input#subject").val();
    var message=$("#message").val();
    if ((name!=="") &&  (subject!=="") && (email!=="") && (message!=="")){
      alert( "Hello " + name + "! We have received your message. Thank you for reaching out to us.")
    }
    else{
      alert("Fill well the form")
    }
       
  });
});
  