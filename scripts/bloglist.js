var configuration=document.getElementsByClassName("confirmationBox_model")[0];

var delte=document.querySelectorAll(".trash");

var no=document.getElementById("no");



var j;
for (j = 0; j < delte.length; j++) {
    let btn=delte[j];
    btn.onclick=function() {
        configuration.style.display="flex";
    }
}

no.onclick=function () {
    configuration.style.display="none";
}
