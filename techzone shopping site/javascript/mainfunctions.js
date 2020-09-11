let a = localStorage.getItem("number");

// localStorage.clear();

let x = document.getElementById("cart-icon");

function addProductToCart() {
    x.innerText = ++a;
    localStorage.setItem("number", a);
    event.preventDefault()
}

if (x.innerText == "") {
    x.innerHTML = localStorage.getItem("number");
}

function Clear(){
    x.innerHTML = --a;
    --counter;
    localStorage.setItem("number", a);
    localStorage.setItem("counter", counter);
    if (a == 0) {
        document.getElementsByClassName("content")[0].style.display = "block";
        document.getElementsByClassName("cart-add")[0].style.display = "none";
    }
    else{
        document.getElementsByClassName("product")[this].style.display = "none";
    }
    event.preventDefault()
}

let called = false;
let imgSrc;
let title;
let price;
let inStock;
let counter = localStorage.getItem("counter");
let z;

function Add(){
    counter++;
    imgSrc = document.getElementsByClassName("item")[0].getElementsByTagName("img")[0].src;
    title = document.getElementsByClassName("item-spec")[0].getElementsByClassName("title")[0].innerHTML;    
    price = document.getElementsByClassName("price")[1].getElementsByTagName("a")[0].innerHTML;

    var f;

    if (price.length > 11) {
        f = price.substr(7,5);
    }

    if (counter == 1) {
        localStorage.setItem("imgsrc1", imgSrc);
        localStorage.setItem("title1", title);
        localStorage.setItem("price1", f);
    }
    if (counter == 2) {
        localStorage.setItem("imgsrc2", imgSrc);
        localStorage.setItem("title2", title);
        localStorage.setItem("price2", f);
    }
    if (counter == 3) {
        localStorage.setItem("imgsrc3", imgSrc);
        localStorage.setItem("title3", title);
        localStorage.setItem("price3", f);
    }

    localStorage.setItem("counter", counter);
    event.preventDefault()
}

if(x.innerText == 1)
{
    document.getElementsByClassName("content")[0].style.display = "none";
    document.getElementsByClassName("cart-add")[0].style.display = "flex";

    document.getElementsByClassName("product")[0].style.display = "flex";
    document.getElementsByClassName("information")[0].getElementsByTagName("h3")[0].innerHTML = "Product " + localStorage.getItem("title1");
    document.getElementsByClassName("information")[0].getElementsByTagName("p")[0].innerHTML = "Price: " + localStorage.getItem("price1") + "$";
    document.getElementsByClassName("product-media")[0].getElementsByTagName("img")[0].src = localStorage.getItem("imgsrc1");

    let q = parseInt(localStorage.getItem("price1"));
    let sum = q + q*0.010;
    if (sum > 1000) {
        sum = sum.toPrecision(6);
    }
    document.getElementsByClassName("purchase")[0].getElementsByTagName("p")[0].innerHTML = "Products cost: " + (q) + "$";
    document.getElementsByClassName("purchase")[0].getElementsByTagName("p")[1].innerHTML = "Taxes: " + (q*0.010).toPrecision(4) + "$";
    document.getElementsByClassName("purchase")[0].getElementsByTagName("p")[3].innerHTML = "Total: " + (q + q*0.010) + "$";
}

if(x.innerText == 2)
{
    document.getElementsByClassName("content")[0].style.display = "none";
    document.getElementsByClassName("cart-add")[0].style.display = "flex";

    document.getElementsByClassName("product")[0].style.display = "flex";
    document.getElementsByClassName("product")[0].style.display = "flex";
    document.getElementsByClassName("information")[0].getElementsByTagName("h3")[0].innerHTML = "Product " + localStorage.getItem("title1");
    document.getElementsByClassName("information")[0].getElementsByTagName("p")[0].innerHTML = "Price: " + localStorage.getItem("price1") + "$";
    document.getElementsByClassName("product-media")[0].getElementsByTagName("img")[0].src = localStorage.getItem("imgsrc1");

    document.getElementsByClassName("product")[1].style.display = "flex";
    document.getElementsByClassName("information")[1].getElementsByTagName("h3")[0].innerHTML = "Product " + localStorage.getItem("title2");
    document.getElementsByClassName("information")[1].getElementsByTagName("p")[0].innerHTML = "Price: " + localStorage.getItem("price2") + "$";
    document.getElementsByClassName("product-media")[1].getElementsByTagName("img")[0].src = localStorage.getItem("imgsrc2");

    let q = parseInt(localStorage.getItem("price1"));
    let e = parseInt(localStorage.getItem("price2"));
    let sum = q + q*0.010 + e + e*0.010;
    if (sum > 1000) {
        sum = sum.toPrecision(6);
    }
    document.getElementsByClassName("purchase")[0].getElementsByTagName("p")[0].innerHTML = "Products cost: " + (q + e) + "$";
    document.getElementsByClassName("purchase")[0].getElementsByTagName("p")[1].innerHTML = "Taxes: " + (q*0.010 + e*0.010).toPrecision(4) + "$";
    document.getElementsByClassName("purchase")[0].getElementsByTagName("p")[3].innerHTML = "Total: " + (sum) + "$";
}

if (x.innerText == 3) {
    document.getElementsByClassName("content")[0].style.display = "none";
    document.getElementsByClassName("cart-add")[0].style.display = "flex";

    document.getElementsByClassName("product")[0].style.display = "flex";
    document.getElementsByClassName("information")[0].getElementsByTagName("h3")[0].innerHTML = "Product " + localStorage.getItem("title1");
    document.getElementsByClassName("information")[0].getElementsByTagName("p")[0].innerHTML = "Price: " + localStorage.getItem("price1") + "$";
    document.getElementsByClassName("product-media")[0].getElementsByTagName("img")[0].src = localStorage.getItem("imgsrc1");

    document.getElementsByClassName("product")[1].style.display = "flex";
    document.getElementsByClassName("information")[1].getElementsByTagName("h3")[0].innerHTML = "Product " + localStorage.getItem("title2");
    document.getElementsByClassName("information")[1].getElementsByTagName("p")[0].innerHTML = "Price: " + localStorage.getItem("price2") + "$";
    document.getElementsByClassName("product-media")[1].getElementsByTagName("img")[0].src = localStorage.getItem("imgsrc2");

    document.getElementsByClassName("product")[2].style.display = "flex";
    document.getElementsByClassName("information")[2].getElementsByTagName("h3")[0].innerHTML = "Product " + localStorage.getItem("title3");
    document.getElementsByClassName("information")[2].getElementsByTagName("p")[0].innerHTML = "Price: " + localStorage.getItem("price3") + "$";
    document.getElementsByClassName("product-media")[2].getElementsByTagName("img")[0].src = localStorage.getItem("imgsrc3");

    let q = parseInt(localStorage.getItem("price1"));
    let e = parseInt(localStorage.getItem("price2"));
    let t = parseInt(localStorage.getItem("price3"));
    let sum = (q + q*0.010 + e + e*0.010 + t + t*0.010).toPrecision(6)
    document.getElementsByClassName("purchase")[0].getElementsByTagName("p")[0].innerHTML = "Products cost: " + (q + e + t) + "$";
    document.getElementsByClassName("purchase")[0].getElementsByTagName("p")[1].innerHTML = "Taxes: " + (q*0.010 + e*0.010 + t*0.010).toPrecision(4) + "$";
    document.getElementsByClassName("purchase")[0].getElementsByTagName("p")[3].innerHTML = "Total: " + (sum) + "$";
}

//Изчерпано количество
var open = document.getElementsByClassName("open")[0];
open.onclick = function open(){
    document.getElementsByClassName("modal")[0].style.display = "flex";
    event.preventDefault()
}

var close1 = document.getElementsByClassName("close1")[0];
close1.onclick = function close1(){
    document.getElementsByClassName("modal")[0].style.display = "none";
    event.preventDefault()
}

var open1 = document.getElementsByClassName("open1")[0];
open1.onclick = function open1(){
    document.getElementsByClassName("modal")[0].style.display = "flex";
    event.preventDefault()
}

//Добавяне в количка..
function popUp(){
    document.getElementsByClassName("modul")[0].style.display = "flex";
    event.preventDefault()
}

if (document.onclick == true) {
    document.getElementsByClassName("modul")[0].style.display = "none";
    event.preventDefault()
}

function down(){
    document.getElementsByClassName("modul")[0].style.display = "none";
    event.preventDefault()
}
