var createPost_modal = document.getElementsByClassName("createPost_modal")[0];

var createPost=document.getElementsByClassName("button2")[1];

var closeTab=document.getElementsByClassName("close")[2];

createPost.onclick = function() {

    createPost_modal.style.display = "flex";

}

closeTab.onclick=function () {
    createPost_modal.style.display="none";
}


window.onclick = function(event) {
    if (event.target === createPost_modal) {
        createPost_modal.style.display = "none";
    }
}