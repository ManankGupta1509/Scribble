//create post modal
var createPost_modal = document.getElementsByClassName("createPost_modal")[0];
//create post button
var createPost=document.getElementsByClassName("button2")[1];
//close button
var closeTab=document.getElementsByClassName("close")[2];

//on click open create post modal
createPost.onclick = function() {

    //display create post modal
    createPost_modal.style.display = "flex";

}

//on click of close tab
closeTab.onclick=function () {
    //close create modal
    createPost_modal.style.display="none";
}

//hide modal when the page loads
window.onclick = function(event) {
    if (event.target === createPost_modal) {
        createPost_modal.style.display = "none";
    }
}













/***************************************Thank You by Manank Gupta****************************************************************/