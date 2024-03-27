const username = "Tevin Pilgrim-Hampden";
const jobtitle = "Software Engineer";
const profilePic = "./assets/images/headshot.jpg";

const usernameElems = document.querySelectorAll('.data-username');
const jobTitleElm = document.querySelector(".data-jobtitle");
const profilPicElm = document.querySelectorAll(".data-profilePic");

for (let el of usernameElems) {
    el.innerHTML = username;
}

jobTitleElem.innerHTML = jobTitle;

for( let profilePic){
    pro.src = profilePic;
}