// Functionality of the page should appear here
let accButton2 = document.querySelectorAll(".acc-listItem");
const listDesc = document.querySelectorAll(".acc-listDesc");
const dropDown = document.querySelectorAll(".acc-dropdown")


accButton2.forEach((button) => {
    // const content = accButton2.nextElementSibling;
    button.addEventListener("click", function(){
        button.lastElementChild.classList.toggle("show");
        dropDown.classList.toggle("acc-dropdownup")
    })
});
