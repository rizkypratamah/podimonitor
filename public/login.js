var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("name").value;
var password = document.getElementById("password").value;

if ( username === "admin" && password === "admin"){
	alert ("Login successfull!");
	window.location = "monitoring.html"; // Redirecting to other page.
return false;
}
else{
	alert("Wrong username or password");
}
}


