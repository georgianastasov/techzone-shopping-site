var openCompany = document.getElementsByClassName("button-submit2")[0];
openCompany.onclick = function openCompany(){
    var fullName = document.getElementsByClassName("fullname")[0].value;
    document.getElementsByClassName("modal")[0].style.display = "flex";
    document.getElementsByClassName("infoR")[0].innerHTML = "Congratulations " + fullName + ", you make your order."

    let x = document.getElementById("cart-icon");
    x.innerText = 0;

    localStorage.clear();

    document.getElementsByClassName("product")[0].style.display = "none";
    document.getElementsByClassName("product")[1].style.display = "none";
    document.getElementsByClassName("product")[2].style.display = "none";
    document.getElementsByClassName("content")[0].style.display = "block";
    event.preventDefault()
}