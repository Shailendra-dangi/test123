//let boxes = document.getElementsByClassName("box")
//console.log(boxes)
//boxes[2].Style.backgroundColor = "red"

//document.getElementById("redbox").style.backgroundColor = "red"

//document.querySelector(".box").Style.backgroundColor = "green"
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.Style.backgroundColor = "green";
})