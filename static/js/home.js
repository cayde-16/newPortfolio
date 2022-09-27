const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container')

let viewProject = document.querySelector('#viewProject')
let projectSection = document.querySelector('#projects')

let homeScroll = document.querySelector('#homeScroll')
let homeSection = document.querySelector('#hero')

let serviceScroll = document.querySelector('#serviceScroll')
let serviceSection = document.querySelector('#service')


let projectScroll = document.querySelector('#projectScroll')

let contactScroll = document.querySelector("#contactScroll")
let contactSection = document.querySelector("#contact")

let aboutScroll = document.querySelector('#aboutScroll')
let aboutSection = document.querySelector('#about')


homeScroll.addEventListener("click", navigateHome, false);
viewProject.addEventListener("click", navigateProject, false);
projectScroll.addEventListener("click", navigateProject, false);
serviceScroll.addEventListener("click", navigateService, false);
contactScroll.addEventListener("click",navigateContact, false);
aboutScroll.addEventListener("click", navigateScroll, false);

function navigateScroll(e){
        aboutSection.scrollIntoView({behavior:'smooth'})
}


function navigateContact(e){
        contactSection.scrollIntoView({behavior:"smooth"})
}

function navigateService(e){
        serviceSection.scrollIntoView({behavior:"smooth"})
}

function navigateHome(e) {
        homeSection.scrollIntoView({behavior:"smooth"})
}

function navigateProject(e){
        projectSection.scrollIntoView({ behavior: "smooth" })
}

hamburger.addEventListener('click' ,()=> {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=> {
        var scroll_position = window.scrollY;
        if(scroll_position > 250){
                header.style.backgroundColor = "#29323c";
        } else{
                header.style.backgroundColor = "transparent";
        }
});