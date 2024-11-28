// Functionality of the page should appear here
let accButton2 = document.querySelectorAll(".acc-listItem");
const listDesc = document.querySelectorAll(".acc-listDesc");
const dropDown = document.querySelectorAll(".acc-dropdown")


accButton2.forEach((button) => {
    button.addEventListener("click", function(){
        button.querySelector(".acc-listDesc").classList.toggle("show");
        button.querySelector(".acc-dropdown").classList.toggle("acc-dropdownup")
    })
});

