let isOpen = false;

function displayResponse(){
if (isOpen){
    document.getElementById("buttonPlus").innerHTML = "+";
    document.getElementById("response").style.display = "none";
    isOpen = false;
} else {
    document.getElementById("buttonPlus").innerHTML = "-";
    document.getElementById("response").style.display = "block";
    isOpen = true;
}
}
document
    .getElementById("buttonPlus")
    .addEventListener("click", displayResponse)