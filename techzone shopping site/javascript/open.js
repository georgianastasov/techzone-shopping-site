var open = document.getElementsByClassName("open")[1];
open.onclick = function open(){
    document.getElementsByClassName("modal")[0].style.display = "flex";
    event.preventDefault()
}