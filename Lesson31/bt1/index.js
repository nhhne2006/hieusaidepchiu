let innerButton = document.querySelector(".innerButton")
let info = document.getElementById("info")
let hideText = () => {
    info.style.display = "none";
}
let showText = () => {
    info.style.display = "block";
}
innerButton.firstElementChild.addEventListener("click", hideText)
innerButton.lastElementChild.addEventListener("click", showText)