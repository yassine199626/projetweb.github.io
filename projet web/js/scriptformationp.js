var certif=document.getElementById("certif")
var close=document.getElementById("close")
var popup=document.getElementById("popup")
var containerformation=document.getElementById("containerformation")
function showpopup(){
    popup.style.display="inline-block";
    containerformation.style.opacity="0.5"
}
function hidepopup(){
    popup.style.display="none";
    containerformation.style.opacity="1"
}
certif.addEventListener('click',showpopup)
close.addEventListener('click',hidepopup)