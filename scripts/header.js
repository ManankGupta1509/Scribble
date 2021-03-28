// model
var model = document.querySelectorAll(".modal");
// button
var btn = document.querySelectorAll(".btn");
// close button 
var cloose=document.querySelectorAll(".close");


var j;
for(j=0;j<btn.length;j++)
{   //current button
    let b=btn[j];
    //current modal
    let m=model[j];
    //current close btn
    let c=cloose[j];

//on click of button
b.onclick = function() {
    //display model
    m.style.display = "flex";
    //onclick of close button
    c.onclick=function() {
    //close model
    m.style.display="none";
}
}
}


//signin modal
var signin=document.getElementsByClassName("si")[0];
//signup modal
var signup=document.getElementsByClassName("su")[0];

var goToSignUp=document.getElementById("goToSignUp");

//mapping signin to signup
goToSignUp.onclick=function()
{
    signin.style.display="none";
    signup.style.display="flex";
}




//on loading hide all modals
window.onclick = function(event) {
    if (event.target === signup_modal) {
        signup.style.display = "none";
    }
    if (event.target === signin_modal) {
        signin.style.display = "none";
    }
}







/***************************************Thank You by Manank Gupta****************************************************************/