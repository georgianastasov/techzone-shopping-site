var close1 = document.getElementsByClassName("close1")[0];
close1.onclick = function close1(){
    document.getElementsByClassName("modal")[0].style.display = "none";
    event.preventDefault()

    localStorage.setItem("number", 0);
    localStorage.setItem("counter", 0);

    for (let i = 0; i < 16; i++) {
        document.getElementsByClassName("input")[i].value = "";
    }

}

var open = document.getElementsByClassName("button-submit")[0];
open.onclick = function open(){
    var firstName = document.getElementsByClassName("first")[0].value;
    var lastName = document.getElementsByClassName("last")[0].value;
    document.getElementsByClassName("modal")[0].style.display = "flex";
    document.getElementsByClassName("infoR")[0].innerHTML = "Congratulations " + firstName + " " + lastName + ", you make your order."

    let x = document.getElementById("cart-icon");
    x.innerText = 0;

    localStorage.clear();
    
    document.getElementsByClassName("product")[0].style.display = "none";
    document.getElementsByClassName("product")[1].style.display = "none";
    document.getElementsByClassName("product")[2].style.display = "none";
    document.getElementsByClassName("content")[0].style.display = "block";
    event.preventDefault()
}
