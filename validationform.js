let userCheck = false;
let emailCheck = false;
let passwordCheck = false;
let password2Check = false;
let userOrEmailCheck = false;
let password3Check = false;
var userName
var emailAddress
var passWord
var userOrEmail
var password2
function myFunction1() {
	userName = document.getElementById("userName").value;
	if (userName === "") {
		userName = document.getElementById("userName").value;
		document.getElementById("userError").innerHTML = "Please enter a username";
		userCheck = false
	} else {
		document.getElementById("userError").innerHTML = "";
	   	document.getElementById("validUserName").innerHTML = "Your username is " + userName
	   	userCheck = true
	   	localStorage.setItem("USER", userName);
	}
}
function myFunction2() {
	emailAddress = document.getElementById("email").value;
	var emailArrayAddress = Array.from(emailAddress);
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
			emailCheck = false
		} else {
			document.getElementById("emailError").innerHTML = "";
			document.getElementById("validEmail").innerHTML = "Your email address is " + document.getElementById("email").value;
			emailCheck = true
			localStorage.setItem("EMAIL", emailAddress);
			}
		}
function myFunction3() {
	passWord = document.getElementById("password").value;
	if (passWord.length < 10) {
		document.getElementById("passwordError").innerHTML = "Your password must be at least 10 characters and contain a number";
		passwordCheck = false
	} else if (passWord.includes("0") === true ||
	           passWord.includes("1") === true ||
	           passWord.includes("2") === true ||
			   passWord.includes("3") === true ||
			   passWord.includes("4") === true ||
			   passWord.includes("5") === true ||
			   passWord.includes("6") === true ||
			   passWord.includes("7") === true ||
			   passWord.includes("8") === true ||
			   passWord.includes("9") === true) {
		document.getElementById("passwordError").innerHTML = "";
		document.getElementById("validPassWord").innerHTML = "Your password is " + passWord;
		passwordCheck = true
		localStorage.setItem("PASS", passWord);
	} else {
		document.getElementById("passwordError").innerHTML = "Your password must contain at least one number";
		document.getElementById("validPassWord").innerHTML = "";
		passwordCheck = false
	}
}
function myFunction4() {
	var passwordConfirm = document.getElementById("password2").value
	if (passWord === passwordConfirm) {
		document.getElementById("password2Error").innerHTML = "";
		password2Check = true
	} else {
		document.getElementById("password2Error").innerHTML = "Your passwords must match"
		password2Check = false
	}
	if (userCheck === true &&
		emailCheck === true &&
		passwordCheck === true &&
		password2Check === true) {
		document.getElementById("ready").innerHTML = "Yay! All requirements are met and you may proceed below";
	} else {
		document.getElementById("ready").innerHTML = "";
	}
}
function NewTab() {
	window.open("///D:/Projects/ProjectsHTML/loginform.html", '_blank');
}
function myFunction5() {
	var userName2 = localStorage.getItem("USER");
	var email2 = localStorage.getItem("EMAIL");
	var passpass = localStorage.getItem("PASS");
	userOrEmail = document.getElementById("userOrEmail").value;
	password2 = document.getElementById("password3").value;
	if (userOrEmail === userName2 ||
		userOrEmail === email2) {
		userOrEmailCheck = true;
		document.getElementById("uOEerror").innerHTML = "";
	} else {
		userOrEmailCheck = false;
		document.getElementById("uOEerror").innerHTML = "Please enter an existing username or email address";
	}

	if (password2 === passpass) {
		password3Check = true;
		document.getElementById("password3Error").innerHTML = "";

	} else { 
		password3Check = false;
		document.getElementById("password3Error").innerHTML = "Your password is incorrect";
	}
	if (password3Check === true &&
		userOrEmailCheck === true) {
		document.getElementById("finished").innerHTML = "You have successfully logged in. Thank you.";
	} else {
		document.getElementById("finished").innerHTML = "";
	}
	console.log(password3Check)
	console.log(userOrEmailCheck)

}
