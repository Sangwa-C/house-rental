
  var firebaseConfig = {
    apiKey: "AIzaSyCqEFHSvURbNF2MvEYTcswtK7Uo32y-8mQ",
    authDomain: "house-rental-e795d.firebaseapp.com",
    databaseURL: "https://house-rental-e795d.firebaseio.com",
    projectId: "house-rental-e795d",
    storageBucket: "house-rental-e795d.appspot.com",
    messagingSenderId: "975208588512",
    appId: "1:975208588512:web:2b0b1467f4b76b6a"
  };
 firebase.initializeApp(firebaseConfig);

$(window).ready(function(){
  $('#sign').click(function(event){
    event.preventDefault();
   var email=$("#email").val();
   var password1=$("#pass1").val();
   var password2=$("#pass2").val();
  if(password1!=password2){
    alert("passswords don't match");
  }
  else{
    
   firebase.auth().createUserWithEmailAndPassword(email, password2)
   .then(function(val) {
         alert("Success!!");
         console.log(val);
     })
   .catch(function(error) {
     // Handle Errors here.
     alert("ERROR");
     var errorCode = error.code;
     var errorMessage = error.message;
     // [START_EXCLUDE]
     if (errorCode == 'auth/weak-password') {
       alert('The password is too weak.');
     } else {
       alert(errorMessage);
     }
     console.log(error);
     // [END_EXCLUDE]
   })
   
       // [END createwithemail]
    

  }
});
        // log in functio
        $('#login').click(function(){
          var email=$("#emailL").val();
          var password=$("#passwordL").val();
         
          event.preventDefault();
          firebase.auth().signInWithEmailAndPassword(email, password)
             .then(function(val) {
                   window.open('home.html','_self');
               })
             .catch(function(error) {
               // Handle Errors here.
               alert("");
            
              
             })
               });
});
     function menuOpen() {
      document.getElementById("mySidepanel").style.width = "250px";
     }
     function menuClose() {
      document.getElementById("mySidepanel").style.width = "0";
     }