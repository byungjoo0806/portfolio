let body = document.querySelector("body");

let startImage = document.querySelector(".start-image");

let header = document.querySelector(".header");

let introBox = document.querySelector(".intro-box");

let infoIcon = document.querySelector(".info-icon");
let infoWord = document.querySelector(".info-word");

let projectIcon = document.querySelector(".project-icon");
let projectWord = document.querySelector(".project-word");

let contactIcon = document.querySelector(".contact-icon");
let contactWord = document.querySelector(".contact-word");

let headerList = document.querySelectorAll(".header-list");
let headerUl = document.querySelector(".header-ul");

let pageTitle = document.querySelector(".page-title");

let projectPage = document.querySelector(".main-page");

let sectionBreak = document.querySelectorAll(".section-break");

let contactBox = document.querySelector(".contact");

header.onmouseenter = function(){
    header.style.width = "115px";
    // header.style.height = "220px";
    header.style.opacity = "1";
    header.style.borderRadius = "35px";
    // headerUl.style.display = "flex";
    // headerUl.style.justifyContent = "flex-start";
    // header.style.display = "flex";
    // header.style.justifyContent = "flex-start";
    // header.style.alignItems = "center";
    // // headerList.style.height = "30px";
    // infoWord.style.display = "flex";
    // projectWord.style.display = "flex";
    // contactWord.style.display = "flex";
}

header.onmouseleave = function(){
    header.style.width = "50px";
    header.style.opacity = "0.5";
    header.style.borderRadius = "30px";
    // infoWord.style.display = "none";
    // projectWord.style.display = "none";
    // contactWord.style.display = "none";
}

console.log(pageTitle.getBoundingClientRect().top);
console.log(window.pageYOffset);
console.log(window.scrollY);
console.log(sectionBreak[0].getBoundingClientRect().top);
console.log(contactBox.getBoundingClientRect().top);

infoWord.onclick = function(){
    window.scrollTo({
        top: window.scrollY + introBox.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth"
    });
}
infoIcon.onclick = function(){
    window.scrollTo({
        top: window.scrollY + introBox.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth"
    })
}

projectIcon.onclick = function(){
    window.scrollTo({
        top: window.scrollY + projectPage.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth"
    })
}
projectWord.onclick = function(){
    window.scrollTo({
        top: window.scrollY + projectPage.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth"
    })
}

contactIcon.onclick = function(){
    window.scrollTo({
        top: window.scrollY + contactBox.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth"
    })
}
contactWord.onclick = function(){
    window.scrollTo({
        top: window.scrollY + contactBox.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth"
    })
}