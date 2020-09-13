var firebaseConfig = {
  apiKey: "AIzaSyAyoTInU55yC25yylLQlPfExMh8ay1-_KM",
  authDomain: "wallpaperadmin-332fe.firebaseapp.com",
  databaseURL: "https://wallpaperadmin-332fe.firebaseio.com",
  projectId: "wallpaperadmin-332fe",
  storageBucket: "wallpaperadmin-332fe.appspot.com",
  messagingSenderId: "446787345714",
  appId: "1:446787345714:web:c7fa0e246f5e9a5ba14b2b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebase.auth.Auth.Persistence.LOCAL; 
var testName = "test1";
var testName1 = "KKKK";

$("#btn-login").click(function(){

    console.log("button clicked");
    var email = $("#email").val();
    var password = $("#password").val();
    testName = email;
    var result = firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(testName);
    result.catch(function(error){
      alert("Wrong credentials");
      var errorCode = error.code; 
      var errorMessage = error.message; 

      console.log(errorCode);
      console.log(errorMessage);
  });

   
});

function switchView(view){
  console.log("In switchView");
  $.get({
      url:view,
      cache:false,
  }).then(function(data){
    $("#container").html(data);

  });
}


$("#btn-logout").click(function(){
  firebase.auth().signOut();
});