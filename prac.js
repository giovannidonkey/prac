
//1
const con = document.getElementById("container"); 
//console.log(con);

//2
const con2 = document.querySelector("#container");
//console.log(con2);

//3
const con3 = document.querySelectorAll(".second");
//console.log(con3);

//4
const con4 = document.querySelector("ol .third");
//console.log(con4);

//5
const con5 = document.querySelector("#container");
con5.innerText = "Hello";

//6 
const con6 = document.querySelector(".footer");
con6.classList.add("main");

//7
con6.classList.remove("main");

//8
let li = document.createElement("li");

//9
li.innerText = "four";

//10
var list = document.querySelector("ul");
list.appendChild(li);

//11
const olList = document.querySelectorAll("ol li");
for (let i=0;i < olList.length; i++){
    olList[i].style.backgroundColor = "green";
}

//12
const foot = document.querySelector(".footer");
foot.remove();
