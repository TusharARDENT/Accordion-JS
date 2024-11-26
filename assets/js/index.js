// Functionality of the page should appear here
console.log("Hello Accordion")

let accButton = document.getElementsByClassName("acc-listHeading")
console.log(accButton);

let accButton2 = document.querySelectorAll(".acc-listHeading")
console.log(accButton2)

let listDesc = document.querySelectorAll(".acc-listDesc")
// listDesc.style.color = 'blue';
console.log(listDesc)

for(let i = 0; i < listDesc.length;i++){
    if(listDesc[i].style.display = "block"){
        listDesc[i].style.display = "none"
    }
}
