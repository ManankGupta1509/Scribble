var edit=document.getElementById("edit");
var save=document.getElementById("save");

var postHeading=document.getElementById("heading");
var editedPost=document.getElementById("heading_edit");

var content=document.getElementById("postContent");
var editedContent=document.getElementById("postContent_edit");

function editPost() {
    postHeading.style.display="none";
    editedPost.style.display="block";

    content.style.display="none";
    editedContent.style.display="block";

    edit.style.display="none";
    save.style.display="block";

    editedPost.value=postHeading.textContent;
    var val=content.textContent.trim();
    editedContent.innerHTML=val;


    editedContent.style.height = "1px";
    editedContent.style.height = (25+editedContent.scrollHeight)+"px";

}

function savePost() {
    postHeading.style.display="block";
    editedPost.style.display="none";

    content.style.display="block";
    editedContent.style.display="none";

    edit.style.display="block";
    save.style.display="none";

    postHeading.innerHTML=editedPost.value;
    content.innerHTML=editedContent.value;
}



var like=document.getElementById("like");
var counter=document.getElementById("likeCounter");
var count=0;

function likePost() {

    like.innerHTML="<img src=\'https://img.icons8.com/fluent-systems-filled/20/ffffff/facebook-like.png\'/>Liked!";
    count++;
    if(count==1){
        counter.innerHTML="1 person has liked it";
    }
    else{
        counter.innerHTML=count+" people have liked it";
    }

}


var commentContent=document.getElementById("comment");
var comments=document.getElementById("allComment");

function postComment(){
    var newParagraph=document.createElement("P");
    var Content=document.createTextNode(commentContent.value);
    newParagraph.appendChild(Content);
    newParagraph.setAttribute("class","commentContent");
    comments.insertBefore(newParagraph,comments.childNodes[0]);
}