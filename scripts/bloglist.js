

//Modal of Confirmation-Box
var confirmation=document.getElementsByClassName("confirmationBox_model")[0];

//Delete Button or Trash-Can
var delte=document.querySelectorAll(".trash");

//No Button
var no=document.getElementById("no");

//Yes Button
var yes=document.getElementById("yes");

//Geting allPosts
var post=document.querySelectorAll(".posts");

//variable for looping
var j;

//for loop for getting the current button and post clicked
for (j = 0; j < delte.length; j++) {
    //instance of current trash button
    let btn=delte[j];
    //instance of current post
    let p=post[j];
    //on button click
    btn.onclick=function() {
        //display confirmation box
        confirmation.style.display="flex";
            //on click of no button
            no.onclick=function () {
                //hide confirmation box
                confirmation.style.display="none";
            }
            //on click of yes button
            yes.onclick=function(){
                //hide both confirmation box and current post
                confirmation.style.display="none";
                p.style.display="none";
        }
    }
}














/***************************************Thank You by Manank Gupta****************************************************************/