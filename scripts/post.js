
/*first creating script for edditing and saving the post and post-heading */

//edit button
var edit=document.getElementById("edit");
//save button
var save=document.getElementById("save");

//post heading element 
var postHeading=document.getElementById("heading");
//edditing area for heading
var editedPost=document.getElementById("heading_edit");

//post content element
var content=document.getElementById("postContent");
//edditing area for content of post
var editedContent=document.getElementById("postContent_edit");

//edit post on click edit
function editPost() {
    //hide existing heading
    postHeading.style.display="none";
    //open edditing area
    editedPost.style.display="block";

    //hide existing content 
    content.style.display="none";
    //open content ediiting area
    editedContent.style.display="block";

    //hide edit button
    edit.style.display="none";
    //display save button
    save.style.display="block";

    //take existing value put in text area then eddit and save it
    editedPost.value=postHeading.textContent;
    var val=content.textContent.trim();
    editedContent.innerHTML=val;

    //script to style edit area as big as the content given
    editedContent.style.height = "1px";
    editedContent.style.height = (25+editedContent.scrollHeight)+"px";

}

//on click of save button 
function savePost() {
    //display updated heading
    postHeading.style.display="block";
    //hide editting area
    editedPost.style.display="none";

    //display updated content
    content.style.display="block";
    //hide editting area
    editedContent.style.display="none";

    //display edit again
    edit.style.display="block";
    //hide save
    save.style.display="none";

    //put the saved value of heading and content to the screen
    postHeading.innerHTML=editedPost.value;
    content.innerHTML=editedContent.value;
}

/*The second part is funtioning of like button */

//like button
var like=document.getElementById("like");
//like counter display
var counter=document.getElementById("likeCounter");
//like count
var count=0;
//on click of like button
function likePost() {

    //change button value from like to liked
    like.innerHTML="<img src=\'https://img.icons8.com/fluent-systems-filled/20/ffffff/facebook-like.png\'/>Liked!";
    like.disabled="true";
    //increase conter with each click
    count++;
    //if 1 display has liked
    if(count==1){
        counter.innerHTML="1 person has liked it";
    }
    else{
        //or else display number + have liked
        counter.innerHTML=count+" people have liked it";
    }

}


/* third part is funtioning aof comment button and adding comment to list*/

//comment content
var commentContent=document.getElementById("comment");
//comment section area for displaying comments
var comments=document.getElementById("allComment");

//on click of comment button
function postComment(){
    //creata anew paragrapgh element
    var newParagraph=document.createElement("P");
    //copy content from text area to node 
    var Content=document.createTextNode(commentContent.value);
    //append the value to the paragraph
    newParagraph.appendChild(Content);
    //set paragrapg class for styling  
    newParagraph.setAttribute("class","commentContent");
    //display the comment in comment section 
    comments.insertBefore(newParagraph,comments.childNodes[0]);
}








/***************************************Thank You by Manank Gupta****************************************************************/