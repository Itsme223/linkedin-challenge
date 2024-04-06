// const username = "Tevin Pilgrim-Hampden";
// const jobtitle = "Software Engineer";
// const profilePic = "./assets/images/headshot.jpg";

const loadUserProfile() = {
const usernameElems = document.querySelectorAll('.data-username');
const jobTitleElm = document.querySelector(".data-jobtitle");
const profilPicElm = document.querySelectorAll(".data-profilePic");

for (let el of usernameElems) {
    el.innerHTML = userProfile.username;
}

jobTitleElem.innerHTML = userProfile.jobTitle;

for( let pro of profilePicElems){
    pro.src = userProfile.profilePic;
}

const createPost = () => {
    const usernameElem = document.querySelector(".data-username").innerHTML;
    const post = document.querySelector(".data-post").value;
    
    if (post) {
        const parentDiv =document.querySelector(".posts");
        //Create a div,with class = posts__item
        const postsItemDiv = document.createElement("div");
        postsItemDiv.classList.add("posts__item");
    }
    const parentDiv =document
    const newPost = document.createElement("div");
    newPost.classList.add('posts__item')
}

};
