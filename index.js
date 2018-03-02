firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // javascript:window.location.href='index.html'

  } else {
	javascript:window.location.href='login.html'  	
 	
  }
});


var firename = document.getElementById("firename");

var firebaseHeadingRef = firebase.database().ref().child("naam");
firebaseHeadingRef.on('value',function(datasnapshot){
	firename.innerText = datasnapshot.val();
});


function logout(){
	firebase.auth().signOut().then(function() {
  // Sign-out successful.
  javascript:window.location.href='login.html'
}).catch(function(error) {
  // An error happened.
});
	
}