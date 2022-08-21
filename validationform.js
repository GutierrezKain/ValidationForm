function myFunction1() {
	var userName = document.getElementById("userName").value;
	if (userName === "") {
		document.getElementById("userError").innerHTML = "Please enter a valid username";
	} else {
		document.getElementById("userError").innerHTML = "";
	   	document.getElementById("validUserName").innerHTML = "Your username is " + document.getElementById("userName").value;
	}

}
function myFunction2() {
	var emailAddress = Array.from(document.getElementById("email").value);
	var arrayLength = emailAddress.length;
	for (i = 0; i < arrayLength; i++) {
	}
		if (emailAddress[0,emailAddress.length-1] === "@" ||
			emailAddress[0,emailAddress.length-1] === "!" ||
			emailAddress[0,emailAddress.length-1] === "." ||
			emailAddress[0,emailAddress.length-1] === "#" ||
			emailAddress[0,emailAddress.length-1] === "$" ||
			emailAddress[0,emailAddress.length-1] === "%" ||
			emailAddress[0,emailAddress.length-1] === "^" ||
			emailAddress[0,emailAddress.length-1] === "&" ||
			emailAddress[0,emailAddress.length-1] === "*" ||
			emailAddress[0,emailAddress.length-1] === "(" ||
			emailAddress[0,emailAddress.length-1] === ")" ||
			emailAddress[0,emailAddress.length-1] === "-" ||
			emailAddress[0,emailAddress.length-1] === "=" ||
			emailAddress[0,emailAddress.length-1] === "+" ||
			emailAddress[0,emailAddress.length-1] === "?" ||
			emailAddress[0,emailAddress.length-1] === "," ||
			emailAddress[0,emailAddress.length-1] === ">" ||
			emailAddress[0,emailAddress.length-1] === "<" ||
			emailAddress.includes("@") === false ||
			emailAddress.includes(".") === false) {
			document.getElementById("emailError").innerHTML = "Please enter valid email address";
		} else {
			document.getElementById("emailError").innerHTML = "";
			document.getElementById("validEmail").innerHTML = "Your email address is " + document.getElementById("email").value;
			}
		}
function NewTab() {
	window.open(file:///D:/Projects/ProjectsHTML/loginform.html);
}

