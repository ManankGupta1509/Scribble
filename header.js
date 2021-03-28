var signup = document.getElementsByClassName("Signup")[0];

var signup_btn = document.getElementById("btn");

var signup_close=document.getElementsByClassName("close")[1];

signup_btn.onclick = function() {
    signup.style.display = "flex";

}

signup_close.onclick=function () {
    signup.style.display="none";
}



var signin = document.getElementsByClassName("Signin")[0];

var signin_btn = document.getElementById("btn1");

var signin_close=document.getElementsByClassName("close")[0];

signin_btn.onclick = function() {
    signin.style.display = "flex";

}

signin_close.onclick=function () {
    signin.style.display="none";
}


var goToSignUp=document.getElementById("goToSignUp");

goToSignUp.onclick=function()
{
    signin.style.display="none";
    signup.style.display="flex";
}





window.onclick = function(event) {
    if (event.target === signup_modal) {
        signup.style.display = "none";
    }
    if (event.target === signin_modal) {
        signin.style.display = "none";
    }
}
