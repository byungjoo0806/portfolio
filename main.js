let rainingWord1 = document.querySelector(".raining-words1");
let rainingWord2 = document.querySelector(".raining-words2");
let rainingWord3 = document.querySelector(".raining-words3");
let rainingWord4 = document.querySelector(".raining-words4");
let rainingWord5 = document.querySelector(".raining-words5");

let rainingWordStop1 = document.querySelector(".raining-words-stop1");
let rainingWordStop2 = document.querySelector(".raining-words-stop2");
let rainingWordStop3 = document.querySelector(".raining-words-stop3");
let rainingWordStop4 = document.querySelector(".raining-words-stop4");
let rainingWordStop5 = document.querySelector(".raining-words-stop5");

let openingPage = document.querySelector(".opening-page");
let openingWord = document.querySelector(".opening-word");

let rightArrow = document.querySelector(".right-arrow");

let mainPage = document.querySelector(".main");

setTimeout(() => {
    rainingWordStop1.style.display = "flex";
}, 5000);
setTimeout(() => {
    rainingWordStop2.style.display = "flex";
}, 6000);
setTimeout(() => {
    rainingWordStop3.style.display = "flex";
}, 7000);
setTimeout(() => {
    rainingWordStop4.style.display = "flex";
}, 8000);
setTimeout(() => {
    rainingWordStop5.style.display = "flex";
}, 9000);

setTimeout(() => {
    rainingWordStop1.style.display = "none";
    rainingWordStop2.style.display = "none";
    rainingWordStop3.style.display = "none";
    rainingWordStop4.style.display = "none";
    rainingWordStop5.style.display = "none";
}, 10000);

setTimeout(() => {
    rainingWord1.style.animation = "dropWordMore 2s ease";
    rainingWord2.style.animation = "dropWordMore 2s ease";
    rainingWord3.style.animation = "dropWordMore 2s ease";
    rainingWord4.style.animation = "dropWordMore 2s ease";
    rainingWord5.style.animation = "dropWordMore 2s ease";
}, 10000);

setTimeout(() => {
    openingWord.style.display = "flex";
    rightArrow.style.display = "flex";
}, 12000);

rightArrow.onclick = function(){
    openingPage.style.animation = "openingPageDisappear 3s ease";
    setTimeout(() => {
        openingPage.style.display = "none";
        mainPage.style.display = "block";
    }, 3000);
    mainPage.style.animation = "mainPageAppear 3s ease";
}