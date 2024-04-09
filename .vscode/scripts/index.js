const loadUserProfile = () => {
    //1. Get username, job title and profil pic
    const usernameElems = document.querySelectorAll(".data-username");
    const jobTitleElm = document.querySelector(".data-jobtitle");
    const profilePicElems = document.querySelectorAll(".data-profilePic");


    //2. Manipulate and assign new data iterate through usernameElems
    for (let el of usernameElems) {
        el.innerHTML = userProfile.username;
    }

    jobTitleElem.innerHTML = userProfile.jobTitle;

    for ( let pro of profilePicElems) {
        pro.src = userProfile.profilePic;
    }
};

//3.Add click event, call function createPost, Get 2 information:Username, posts
//Get username: select a dome element, get data from the element, get post data

const createPost = () => {
    const username = document.querySelector(".data-username").innerHTML;
    const post = document.querySelector(".data-post").value;
    console.log("username, post", username,post);

    if (post) {
        const parentDiv = document.querySelector(".posts");
        //Create a div,with class = posts__item
        const postsItemDiv = document.createElement("div");
        postsItemDiv.classList.add("posts__item");
        //Create 3 children:posts__usernamem posts__content, posts__like
        //Add them to the postsItemDiv
        const postsUsernameDiv = document.createElement("div");
        postsUsernameDiv.classList.add("posts__username");

        postsUsernameDiv.innerText = username + " Posted";
        const postsContentDiv = document.createElement("div");

        postsContentDiv.classList.add("posts__content");
        const postcontent = document.createElement("p");
        postcontent.innerHTML = post;

        postsContentDiv.append(postcontent);

        const postsLikeDiv = document.createElement("div");

        postsLikeDiv.classList.add("posts__like");
        //Follow the same
        postsItemDiv.append(postsUsernameDiv);
        postsItemDiv.append(postsContentDiv);
        postsItemDiv.append(postsLikeDiv);

        //append this div to parent: section : posts
        parentDiv.prepend(postsItemDiv) }
        else {
            //empty post
        alert("Error: You have empty post");
        
    }

};

loadUserProfile();
