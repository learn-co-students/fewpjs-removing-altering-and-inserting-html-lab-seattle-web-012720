// Write your code here!

let main = document.querySelector("main#main");
main.remove();


let newHeader = document.createElement("h1");
document.body.appendChild(newHeader);
newHeader.classname = "victory";
newHeader.id = "victory";
newHeader.innerHTML = "I is the champion";