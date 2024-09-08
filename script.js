// SIDE NAV-BAR ACTIVE
// const navLinkEls = document.querySelectorAll(".nav_links");

// navLinkEls.forEach(navLinkEls => {
//     navLinkEls.addEventListener("click", ()=> {
//         document.querySelector(".active")?.classList.remove("active");
//         navLinkEls.classList.add("active");
//     });
// });

// HOME NAV-BAR ACTIVE
// const homeNavLinks = document.querySelectorAll(".activeH");

// homeNavLinks.forEach(homeNavLinks => {
//     homeNavLinks.addEventListener("click", ()=> {
//         document.querySelector(".active_home")?.classList.remove("active_home");
//         homeNavLinks.classList.add("active_home");
//     });
// });

// Sub-NAV-BAR ACTIVE
// const SubNavLinks = document.querySelectorAll(".second_nav");

// SubNavLinks.forEach(SubNavLinks => {
//     SubNavLinks.addEventListener("click", ()=> {
//         document.querySelector(".active22")?.classList.remove("active22");
//         SubNavLinks.classList.add("active22");
//     });
// });

// SIDE NAV-BAR ACTIVE
let navLinksEls = document.querySelectorAll(".navigation a");
let bodyId = document.querySelector("body").id;

for(let link of navLinksEls){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
}

// HOME NAV-BAR ACTIVE
let homeNavLinks = document.querySelectorAll(".summaryNav a");
let bodyId2 = document.querySelector("body").id;

for(let link of homeNavLinks){
    if(link.dataset.active == bodyId){
        link.classList.add("active22");
    }
}
// Main landing Page NAV-BAR ACTIVE
let landNavLinks = document.querySelectorAll(".home_nav a");
let bodyId3 = document.querySelector("body").id;

for(let link of landNavLinks){
    if(link.dataset.active == bodyId){
        link.classList.add("active_home");
    }
}
// FOR OPENING & CLOSING THE DASHBOARD NAVBAR
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".fa-xmark");
const navv = document.querySelector(".myAsideNav");


navOpen.addEventListener("click", function(){
    navv.style.display = "block";
});

navClose.addEventListener("click", function(){
    navv.style.display = "none";
});

// FOR OPENING AND CLOSING THE ADD-EXPENSES PAGE
const expensePopUp = document.querySelector(".sumBtn");
const expensePopClose = document.querySelector(".popclose");
const PopUpPage = document.querySelector(".addExpensePopUp");

expensePopUp.addEventListener("click", function(){
    PopUpPage.style.display = "flex";
})
expensePopClose.addEventListener("click", function(){
    PopUpPage.style.display = "none";
})

// FOR OPENING AND CLOSING BANK SYNC METHOD
const bankSyncPopUp = document.querySelector(".firstbox1");
const SyncPopUpPage = document.querySelector(".modal-body");
const SyncPopClose = document.querySelector(".sync-close");

bankSyncPopUp.addEventListener("click", function(){
    SyncPopUpPage.style.display = "flex";
    PopUpPage.style.display = "none";
})

SyncPopClose.addEventListener("click", function(){
    SyncPopUpPage.style.display = "none";
})

// FOR IMPORT FILE METHOD
const importFilePopUp = document.querySelector(".thirdbox");
const filePopUpPage = document.querySelector(".import-file-method");
const importFilePopClose = document.querySelector(".file-close");

importFilePopUp.addEventListener("click", function(){
    filePopUpPage.style.display = "flex";
    PopUpPage.style.display = "none";
})

importFilePopClose.addEventListener("click", function(){
    filePopUpPage.style.display = "none";
})