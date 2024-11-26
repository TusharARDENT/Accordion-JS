// Functionality of the page should appear here
console.log("Hello Accordion");

let accButton = document.getElementsByClassName("acc-listHeading");
console.log(accButton);

let accButton2 = document.querySelectorAll(".acc-listHeading");
console.log(accButton2);

let listDesc = document.querySelectorAll(".acc-listDesc");
// listDesc.style.color = 'blue';
console.log(listDesc);

const dropdown = document.querySelectorAll(".acc-dropdown");

for (let i = 0; i < listDesc.length; i++) {
  if ((listDesc[i].style.display = "block")) {
    listDesc[i].style.display = "none";
  }
}

function rotate(dropdown) {
  dropdown.style.transition = "transform (180deg)";
}
accButton2.forEach((button) => {
  button.addEventListener("click", function () {
    const content = button.nextElementSibling;
    if (content.style.display == "none") {
      content.style.display = "block";
      content.style.transition = "transform 2sec ease";
      rotate(dropdown);
    } else if (content.style.display == "block") {
      content.style.display = "none";
    }
    content.style.transition = ", 0.3s ease";
  });
});
