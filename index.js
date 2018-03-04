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

//////////
// $(document).ready(function(){

var markers = [];

function fetchAllDangerCoods() {
  var def = $.Deferred();
  var rootRef = firebase.database().ref().child("dangerCoods");
  rootRef.on("child_added", snap => {
    // var name = snap.child("Name").val();
    // var email = snap.child("Email").val();
    var coods = snap.child("coods").val();
    
    def.resolve(window.markers.push(coods));
     

      // $("#table-body").append("<tr><td>" + name + "</td><td>"+ email + "</td><td><button>Remove</button></td></tr>");
  });
  return def.promise();
}

// let promise = fetchAllDangerCoods();

fetchAllDangerCoods().then(function(){
  console.log("the final then" + markers) 
});
// console.log("the final" + markers); 
// });