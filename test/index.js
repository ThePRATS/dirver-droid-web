var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

function submitClick(){
	var firebaseRef = firebase.database().ref();
	firebaseRef.child("Name").set("Tanmay")
	window.alert("Okay")
}