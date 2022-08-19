const content = document.getElementById("unique");
window.addEventListener("dblclick", () => {
    content.innerHTML = "reach by js(changes because you doubleclicked somewhere in the window)";
}) ;
//下一个window监听会覆盖上一个

const reset = document.getElementById("resetbutton");
const toreset = document.getElementById("unique");
reset.addEventListener("click", () => {
    toreset.innerHTML = "id stuff(resets)";
}) ;





const button = document.getElementById("button");
button.addEventListener("click", () => {
    alert("You clicked the button!")
}) ;




const button2 = document.getElementById("button2");
const div = document.getElementById("div")
const addParagraph = content =>{
    const newLi = document.createElement("li");
    newLi.innerHTML = content;
    div.appendChild(newLi);
}

button2.addEventListener("dblclick", () => {
    addParagraph("here is a new paragraph");
}) ;